import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenus } from "@/lib/queries/getMenus";

const NotoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description: "Frontend Developer 정다슬",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = await getMenus();
  const visibleMnus = menus.filter((menu) => menu.isVisible);
  return (
    <html lang="ko">
      <body className={`${NotoSans.variable} antialiased`}>
        <Header menus={visibleMnus} />
        {children}
        <Footer menus={visibleMnus} />
      </body>
    </html>
  );
}
