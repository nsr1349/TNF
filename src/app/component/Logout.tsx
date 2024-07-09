'use client'

import { supabase } from '@/lib/supabaseClient';

export default function Logout() {
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    console.log(error)
  }
  
  return (
    <>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}
