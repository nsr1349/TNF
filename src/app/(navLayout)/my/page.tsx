'use client';

import { supabase } from "@/utils/supabase/client";

export default function My() {

  const handleKakaoSignIn = async () => {

    const { error } = await supabase.auth.signOut()
    console.log(error)
  };

  return (
    <>
    <button onClick={handleKakaoSignIn}>logout</button>
    </>
  );
}