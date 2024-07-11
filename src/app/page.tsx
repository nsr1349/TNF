import Link from "next/link";
import Logout from "@/app/component/Logout";
import UserDataBtn from "@/app/component/UserDataBtn";
import Image from "next/image";
export default async function Home() {
  return (
    <main>
      <Link href={'/auth/signin'}>로그인</Link>
      <Logout />
      <UserDataBtn />
      <Image
              src="/덤불속.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
    </main>
  );
}
