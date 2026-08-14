import Link from "next/link";

export default function Home() {
  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">INDEPENDENT DESKTOP SOFTWARE</p>
        <h1>Zhijian Document</h1>
        <p className="lede">
          隐私、安全与支持信息。Zhijian Document 是面向学生的独立桌面软件，
          不代表任何学校或教育机构。
        </p>
      </header>

      <section className="cards" aria-label="Legal and support links">
        <Link className="card" href="/privacy">
          <span className="card-kicker">PRIVACY</span>
          <strong>隐私政策 / Privacy Policy</strong>
          <span>了解本地处理、数据边界与第三方平台说明。</span>
        </Link>
        <Link className="card" href="/support">
          <span className="card-kicker">SUPPORT</span>
          <strong>支持中心 / Support</strong>
          <span>报告问题前，请先移除文档内容与个人信息。</span>
        </Link>
      </section>

      <footer>Policy version 1.0 · Effective 2026-08-14</footer>
    </main>
  );
}
