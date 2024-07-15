import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import { FaUser, FaCartShopping } from "react-icons/fa6";
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
          <div className="px-6 flex items-center h-16 w-full max-w-[1200px]">
            <Link href={'/'} className="text-2xl font-bold mx-8">TNF</Link>
            <Navbar />
            <div className="flex gap-4">
              <div className="bg-zinc-800 h-10 w-10 p-2 rounded-full grid place-items-center">
                <FaCartShopping />
              </div>
              <div className="bg-zinc-800 h-10 w-10 p-2 rounded-full grid place-items-center">
                <FaUser />
              </div>
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
