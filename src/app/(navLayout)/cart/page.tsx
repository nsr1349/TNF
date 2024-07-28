'use client'

import { useState } from "react";
import CartItem from "./components/CartItem";
import { orderAction } from "./action/action";

export interface ProductType {
    id : string
    image : string
    title : string
    quantity : number,
    price : number
}

const mock = [
    {
        id : '1',
        image : '/덤불속.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
    {
        id : '2',
        image : '/덤불속.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
    {
        id : '3',
        image : '/덤불속.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
]

export default function Cart() {
    const [ cart , setCart ] = useState(mock)

    const handleCartQuantity = (targetId : string , num : number)=> {
        const newCart = cart.map((product)=> {
            if (targetId !== product.id) return product
            const newQuantitiy = product.quantity + num > 0 ? product.quantity + num : product.quantity
            return { ...product , quantity : newQuantitiy}
        })
        setCart(newCart)
    }

    return (
            <div className="w-full max-w-[1000px] px-6">
                <h1 className="my-6 text-xl font-bold">장바구니</h1>
                <form action={orderAction}>
                    {cart.map((product)=> <div key={product.id}>
                        <CartItem product={product} handleCartQuantity={handleCartQuantity}/>
                        <hr className="border-sub my-4"/>
                    </div> )}
                    <div>
                        <h2>총수량</h2>
                        <h2>{ cart.reduce((acc, {price,quantity})=> acc + (price * quantity) , 0) } 원</h2>
                    </div>
                    <button className="bg-purewhite text-main hover:bg-zinc-300 px-14 py-3 font-bold">주문하기</button>
                </form>
            </div>
        );
}