'use client'

import { redirect } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

interface AddCartBtnProps {
    product_id : string
    image : string
    user_id : string | undefined
}

export default function AddCartBtn({product_id , image , user_id} : AddCartBtnProps)  {
    const AddCart = async () => {
        if (!user_id) redirect('/login');
        
        const { data, error } = await supabase
        .from('cart')
        .insert([{ user_id, product_id , image }])
        .select()
        console.log(data)
    }


    return (
        <button onClick={AddCart} className="w-full bg-purewhite text-main h-14 font-bold py-2 hover:bg-zinc-400 transition-all duration-200">장바구니 담기</button>
    );
}
