import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { createClient } from "@/utils/supabase/server";

export default async function NavLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
      <>
        {
          user ? <div className="bg-point py-2 font-bold text-center">안녕하세요 { user?.email } 님</div> : 
          <div className="bg-gray py-2 font-bold text-center">비 로그인 상태입니다</div> 
        }
        <header className="flex items-center h-16 px-4 justify-between border-b-sub border-b-2 sticky top-0 bg-main z-50">
          <Link href={'/'} className="text-2xl font-bold mx-8">TNF</Link>
          <Navbar />
          <div className="flex gap-4">
            <Link href={'/cart'} className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-subhover transition-all">
              <FaCartShopping />
            </Link>
            <Link href={ user ? '/my' : '/login' } className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center hover:bg-subhover transition-all">
              <FaUser />
            </Link>
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