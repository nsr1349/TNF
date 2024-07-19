'use client'

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

export default function UserDataBtn() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }

    fetchUser();
  }, []);

  return (
    <>
      <button onClick={() => console.log(user)}>유저데이터</button>
    </>
  );
}