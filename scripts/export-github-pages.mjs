import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(root, "docs");
const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("github-pages-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const routes = [
  { pathname: "/", output: "index.html" },
  { pathname: "/privacy", output: "privacy/index.html" },
  { pathname: "/support", output: "support/index.html" },
];

function makeStatic(html, pathname) {
  const canonicalPath = pathname === "/" ? "/" : `${pathname}/`;
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\shref=["']\/privacy["']/gi, ' href="/privacy/"')
    .replace(/\shref=["']\/support["']/gi, ' href="/support/"')
    .replace(/<link rel="canonical" href="[^"]*"\/>/i, `<link rel="canonical" href="https://legal.zhijianai.top${canonicalPath}"/>`)
    .replace("</head>", '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; img-src \'self\' data:; style-src \'self\' \'unsafe-inline\'; font-src \'self\'; base-uri \'none\'; form-action \'none\'; frame-ancestors \'none\'"/></head>');
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (response.status !== 200) throw new Error(`EXPORT_RENDER_FAILED:${route.pathname}:${response.status}`);
  const target = path.join(outputRoot, route.output);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, makeStatic(await response.text(), route.pathname), "utf8");
}

await cp(path.join(root, "dist", "client", "_next"), path.join(outputRoot, "_next"), { recursive: true });
await cp(path.join(root, "public", "og.png"), path.join(outputRoot, "og.png"));
await writeFile(path.join(outputRoot, "404.html"), await readFile(path.join(outputRoot, "index.html"), "utf8"), "utf8");
await writeFile(path.join(outputRoot, "CNAME"), "legal.zhijianai.top\n", "utf8");
await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");

console.log(`Exported ${routes.length} static routes to ${outputRoot}`);
