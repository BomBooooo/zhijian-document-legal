import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [pathname, expected] of [
  ["/", ["Zhijian Document", "Privacy Policy", "Support"]],
  ["/privacy", ["隐私政策", "本地优先处理", "不会把论文"]],
  ["/support", ["支持中心", "不要上传文档", "公开支持请求"]],
]) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    for (const fragment of expected) assert.match(html, new RegExp(fragment, "i"));
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
  });
}

test("keeps hosting data-free and metadata production-ready", async () => {
  const [hosting, layout, packageJson] = await Promise.all([
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  const config = JSON.parse(hosting);
  assert.equal(config.d1, null);
  assert.equal(config.r2, null);
  assert.match(config.project_id, /^appgprj_/);
  assert.match(layout, /https:\/\/legal\.zhijianai\.top/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
