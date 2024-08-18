'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      supabase.auth.getUser().then(({ data: { user } }) => {
        setUser(user);
        console.log('로그인정보' , user)
      });
    });

  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  if (!user) {
    return (
      <>비 로그인 상태입니다</>
    );
  }

  return (
    <div>
      <p className="text-xl mb-4">안녕하세요, {user.email}님!</p>
      <button
        onClick={handleLogout}
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        로그아웃
      </button>
    </div>
  );
}

