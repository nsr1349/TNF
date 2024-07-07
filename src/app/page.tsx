import Link from "next/link";
import Logout from "@/component/Logout";
import UserDataBtn from "@/component/UserDataBtn";

export default async function Home() {
  return (
    <main>
      <Link href={'/auth/signin'}>로그인</Link>
      <Logout />
      <UserDataBtn />
    </main>
  );
}