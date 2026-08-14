import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "Zhijian Document privacy policy and local-first data boundary.",
};

export default function PrivacyPage() {
  return (
    <main className="shell document">
      <nav>
        <Link href="/">← 返回首页</Link>
        <Link href="/support">支持中心</Link>
      </nav>
      <header>
        <p className="eyebrow">PRIVACY POLICY · VERSION 1.0</p>
        <h1>隐私政策</h1>
        <p className="lede">生效日期：2026 年 8 月 14 日</p>
      </header>

      <section>
        <h2>1. 适用范围与身份说明</h2>
        <p>
          本政策适用于 Zhijian Document Windows 桌面应用。该软件由独立发布者提供，
          面向个人学生使用，不隶属于、不代表且未获得任何学校、学院或教育机构的官方背书。
        </p>
      </section>

      <section>
        <h2>2. 本地优先处理</h2>
        <p>
          应用的基础文档导入、编辑、排版、保存与导出在用户设备本地完成。
          应用不会把论文、批注、模板内容或导出的 DOCX/PDF 上传到发布者服务器。
        </p>
        <ul>
          <li>无需注册账户；</li>
          <li>不提供云同步；</li>
          <li>不嵌入广告；</li>
          <li>不收集应用内文档内容、编辑历史或文件路径；</li>
          <li>核心排版功能不依赖 AI 或远程服务。</li>
        </ul>
      </section>

      <section>
        <h2>3. AI 与联网功能</h2>
        <p>
          当前面向 Microsoft Store 的基础版本不会在未取得用户明确授权时发送文档内容。
          如果未来增加可选 AI 或远程能力，将在发送前单独说明接收方、数据范围和目的，
          并要求用户主动选择；拒绝不会影响基础本地排版能力。
        </p>
      </section>

      <section>
        <h2>4. 第三方平台</h2>
        <p>
          Microsoft Store、Windows、GitHub 及本站托管平台可能依据各自政策处理下载、
          更新、安全、崩溃或支持交互所产生的数据，这些处理不由 Zhijian Document 应用控制。
          请查阅对应平台的隐私声明。
        </p>
      </section>

      <section>
        <h2>5. 支持请求</h2>
        <p>
          支持入口使用公开的 GitHub Issues。提交者自行决定公开的信息。请勿提交论文正文、
          DOCX/PDF、学生证件、姓名、学号、联系方式、日志中的本地路径或其他个人信息。
          仅需提供应用版本、Windows 版本、可公开的复现步骤和稳定错误码。
        </p>
      </section>

      <section>
        <h2>6. 保存、删除与安全</h2>
        <p>
          应用不会为发布者建立文档云端副本。本地文件的保存与删除由用户和 Windows 控制。
          GitHub 支持请求的公开内容及平台日志由 GitHub 按其政策处理；如误发敏感信息，
          请立即在支持页面发起删除请求，并同时使用 GitHub 提供的编辑或删除能力。
        </p>
      </section>

      <section>
        <h2>7. 儿童与教育场景</h2>
        <p>
          应用不要求提供年龄或学校身份，也不基于这些信息进行画像。
          未成年人应在监护人和所在地区适用规则允许的范围内使用软件。
        </p>
      </section>

      <section>
        <h2>8. 政策变更与联系</h2>
        <p>
          政策发生实质变化时，将更新版本号和生效日期。隐私、安全或删除请求请通过
          <Link href="/support">支持中心</Link>提交。不要在请求中附加文档或个人信息。
        </p>
      </section>

      <aside className="notice">
        <strong>English summary.</strong> Core document processing is local. The app does not
        require an account, upload documents to the publisher, provide cloud sync, or use
        document content for advertising. Optional network or AI features require explicit user
        authorization. Do not include document content or personal data in public support requests.
      </aside>
      <footer>Zhijian Document · Independent publisher · Policy version 1.0</footer>
    </main>
  );
}
