import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const cases = [
  ["../docs/index.html", ["Zhijian Document", "/privacy/", "/support/"]],
  ["../docs/privacy/index.html", ["隐私政策", "本地优先处理", "不会把论文"]],
  ["../docs/support/index.html", ["支持中心", "不要上传文档", "github.com/BomBooooo/zhijian-document-support"]],
];

for (const [relativePath, fragments] of cases) {
  test(`GitHub Pages export ${relativePath}`, async () => {
    const html = await readFile(new URL(relativePath, import.meta.url), "utf8");
    for (const fragment of fragments) assert.match(html, new RegExp(fragment, "i"));
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /<form\b|type=["']file["']|analytics|telemetry/i);
  });
}

test("GitHub Pages custom-domain files are present", async () => {
  assert.equal((await readFile(new URL("../docs/CNAME", import.meta.url), "utf8")).trim(), "legal.zhijianai.top");
  await readFile(new URL("../docs/.nojekyll", import.meta.url));
});
