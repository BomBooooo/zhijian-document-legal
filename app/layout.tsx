import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://legal.zhijianai.top"),
  title: {
    default: "Zhijian Document | Legal & Support",
    template: "%s | Zhijian Document",
  },
  description: "Zhijian Document privacy, security, and support information.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    title: "Zhijian Document | Legal & Support",
    description: "Privacy, security, and support for independent local-first desktop software.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zhijian Document privacy, security, and support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhijian Document | Legal & Support",
    description: "Privacy, security, and support for independent local-first desktop software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
