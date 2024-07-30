import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { supabase } from "@/utils/supabase/client";

export default async function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { data: { user }, error: userError } = await supabase.auth.getUser()
  // console.log("User:", user)
  // const { data } = await supabase.auth.getSession()
  // console.log(data)
  return (
      <>
        <header className="flex items-center h-16 px-4 justify-between border-b-sub border-b-2 sticky top-0 bg-main z-50">
            <Link href={'/'} className="text-2xl font-bold mx-8">TNF</Link>
            <Navbar />
            <div className="flex gap-4">
              <Link href={'/cart'} className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-subhover transition-all">
                <FaCartShopping />
              </Link>
              <Link href={'/login'} className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-subhover transition-all">
                <FaUser />
              </Link>
            </div>
        </header>
        <main className="w-full min-h-screen mx-auto flex flex-col items-center pb-20">
          {/* <h1>{data?.session ? 
            <span className="text-green-800 bold">로그인됨</span>  : 
            <span className="text-red-800 bold">비로그인</span>
        }</h1> */}
          {children}
        </main>
        <footer>
        </footer>
      </>
  );
}