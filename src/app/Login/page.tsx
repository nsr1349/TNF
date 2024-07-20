'use client';

import { supabase } from "@/utils/supabase/client";
import Image from "next/image";

export default function Login() {
  console.log(1)
  const handleKakaoSignIn = async () => {
    const { data ,error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options : {
        redirectTo: 'http://localhost:3000'
      }
    });
    if (error) {
      console.error('Kakao Sign In Error:', error.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen text-center content-center">
          <h1 className="text-5xl mb-10">L O G I N</h1>
          <button onClick={handleKakaoSignIn} className="w-64 py-3 border-1 border-sub hover:border-subhover hover:bg-zinc-800 transition-all">
            <div className="flex gap-4 text-center content-center w-fit mx-auto">
              <Image src="/kakaotalk.svg" alt="kakaologo" width={25} height={25} className="text-white"/>
              <h6 className="content-center font-bold">with kakao</h6>
            </div>
          </button>
      </div>
    </>
  );
}