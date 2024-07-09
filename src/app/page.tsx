import Link from "next/link";
import Logout from "@/app/component/Logout";
import UserDataBtn from "@/app/component/UserDataBtn";

export default async function Home() {
  return (
    <main>
      <Link href={'/auth/signin'}>로그인</Link>
      <Logout />
      <UserDataBtn />
    </main>
  );
}
