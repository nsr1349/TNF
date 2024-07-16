import Link from "next/link";
import Navbar from "@/app/(navLayout)/component/Navbar";
import { FaUser, FaCartShopping } from "react-icons/fa6";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <header className="flex items-center h-16 px-4 border-b-zinc-900 border-b-2 sticky top-0 bg-zinc-950 z-50">
            <Link href={'/'} className="text-2xl font-bold mx-8">TNF</Link>
            <Navbar />
            <div className="flex gap-4">
              <div className="bg-zinc-900 h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-zinc-800 transition-all">
                <FaCartShopping />
              </div>
              <div className="bg-zinc-900 h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-zinc-800 transition-all">
                <FaUser />
              </div>
            </div>
        </header>
        <main className="w-full min-h-screen mx-auto flex flex-col items-center pb-20">
          {children}
        </main>
        <footer>
        </footer>
      </>
  );
}