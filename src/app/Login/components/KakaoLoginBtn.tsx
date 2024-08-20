'use client'

import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default function KakaoLoginBtn() {

    const handleKakaoSignIn = async () => {
        const supabase = createClient();
        const { data ,error } = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
        });
        if (error) {
            console.error('Kakao Sign In Error:', error.message);
        }
    };

    return (
        <button onClick={handleKakaoSignIn} className="w-64 py-3 border-1 border-sub hover:border-subhover hover:bg-zinc-800 transition-all">
            <div className="flex gap-4 text-center content-center w-fit mx-auto">
                <Image src="/kakaotalk.svg" alt="kakaologo" width={25} height={25} className="text-white"/>
                <h6 className="content-center font-bold">with kakao</h6>
            </div>
        </button>
    );
}