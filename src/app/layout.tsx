import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TNF",
  description: "TNF boardgame shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="bg-zinc-950 text-white h-[1000px]">
        <header className="grid place-items-center border-b-zinc-900 border-b-2 sticky top-0 bg-zinc-950">
          <div className="px-6 flex justify-between items-center h-12 w-full max-w-[1200px]">
            <Link href={'/'} className=""><div>TNF</div></Link>
            <Navbar />
            <div className="flex gap-4">
              <div>장바구니</div>
              <div>로그인</div>
            </div>
          </div>
        </header>
        <main className="w-full max-w-[1200px] min-h-screen mx-auto flex flex-col items-center">
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
