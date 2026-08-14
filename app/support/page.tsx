import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "支持中心",
  description: "Zhijian Document support and privacy-safe issue reporting.",
};

export default function SupportPage() {
  return (
    <main className="shell document">
      <nav>
        <Link href="/">← 返回首页</Link>
        <Link href="/privacy">隐私政策</Link>
      </nav>
      <header>
        <p className="eyebrow">SUPPORT · PUBLIC INTAKE</p>
        <h1>支持中心</h1>
        <p className="lede">
          获取安装、文档流程和错误诊断帮助。该支持渠道由独立发布者维护，不是学校官方服务。
        </p>
      </header>

      <aside className="warning">
        <strong>不要上传文档。</strong> GitHub Issues 是公开页面。请勿粘贴或上传论文、
        DOCX/PDF、截图中的姓名学号、证件、联系方式或完整日志。
      </aside>

      <section>
        <h2>提交前准备</h2>
        <ol>
          <li>记录 Zhijian Document 版本和 Windows 版本；</li>
          <li>使用不含真实内容的新建空白测试文档复现问题；</li>
          <li>记录界面显示的稳定错误码；</li>
          <li>删除文件路径、用户名、学校名称和其他个人信息。</li>
        </ol>
        <p>
          <a
            className="button"
            href="https://github.com/BomBooooo/zhijian-document-support/issues/new?template=support.yml"
          >
            创建公开支持请求
          </a>
        </p>
      </section>

      <section>
        <h2>可以报告的内容</h2>
        <ul>
          <li>Microsoft Store 安装或更新问题；</li>
          <li>本地 DOCX 导入、编辑、保存、恢复或 PDF 导出问题；</li>
          <li>无障碍、界面流程或翻译问题；</li>
          <li>隐私、安全或公开支持内容删除请求。</li>
        </ul>
      </section>

      <section>
        <h2>响应边界</h2>
        <p>
          支持请求会按风险和可复现性排序处理，不承诺固定响应时限。数据丢失、错误覆盖原始输入、
          未知 OOXML 丢失或安全问题将优先处理。支持人员不会要求用户提供论文原文或账户密码。
        </p>
      </section>

      <section>
        <h2>安全报告</h2>
        <p>
          请不要在公开 Issue 中披露可被利用的安全细节。先创建仅含“请求私密安全联系渠道”
          以及软件版本的公开请求，不要包含漏洞细节或样本；维护者将提供后续安全交流方式。
        </p>
      </section>

      <footer>
        Zhijian Document · <Link href="/privacy">Privacy policy</Link> · Independent publisher
      </footer>
    </main>
  );
}
