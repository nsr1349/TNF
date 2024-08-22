'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase/client';
import Modal from '@/app/component/Modal';
import { useModal } from '@/app/hooks/useModal';

interface AddCartBtnProps {
    product_id : string
    image : string
    user_id : string | undefined
}

export default function AddCartBtn({product_id , image , user_id} : AddCartBtnProps)  {
    const { isOpen, openModal, closeModal } = useModal()
    const router = useRouter()

    const AddCart = async () => {
        if (!user_id) return router.push("/login");
        
        const { data, error } = await supabase
        .from('cart')
        .insert([{ user_id, product_id , image }])
        .select()
        
        if (error) return console.log('무언가 잘못되었습니다..')
        openModal()
        
    }


    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h1>장바구니에 담겼습니다!</h1>
                <p>수량은 장바구니에서 변경 가능합니다</p>
                <button onClick={()=> router.push('/cart')}>장바구니 바로가기</button>
            </Modal>
            <button onClick={AddCart} className="w-full bg-purewhite text-main h-14 font-bold py-2 hover:bg-zinc-400 transition-all duration-200">장바구니 담기</button>
        </>

    );
}
