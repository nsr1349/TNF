import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import KakaoLoginBtn from "./components/KakaoLoginBtn";
export default function Login() {


  return (
    <>
      <div className="w-screen h-screen text-center content-center">
          <h1 className="text-5xl mb-10">L O G I N</h1>
          <KakaoLoginBtn></KakaoLoginBtn>
      </div>
    </>
  );
}