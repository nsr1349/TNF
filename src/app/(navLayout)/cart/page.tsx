'use client'

import { useState } from "react";
import CartItem from "./components/CartItem";
import { orderAction } from "@/actions/order";

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
        image : '/dumb_bul_sock.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
    {
        id : '2',
        image : '/dumb_bul_sock.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
    {
        id : '3',
        image : '/dumb_bul_sock.png',
        title : '덤불속',
        quantity : 1,
        price : 28800
    },
]

export default function Cart() {
    const [ cart , setCart ] = useState(mock)
    const productPrice = cart.reduce((acc, {price,quantity})=> acc + (price * quantity) , 0)

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
                <form action={orderAction} className="flex gap-10 sm:flex-col sm:gap-4">
                    <div className="flex-grow">
                        {cart.map((product)=> <div key={product.id}>
                            <CartItem product={product} handleCartQuantity={handleCartQuantity}/>
                            <hr className="border-sub my-4"/>
                        </div> )}
                    </div>
                    <div className="w-60 flex flex-col gap-1 sm:w-full sm:text-xl">
                        <div className="flex justify-between">
                            <h2 className="text-gray">상품가격</h2>
                            <h2>{ productPrice }</h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-gray">배송비</h2>
                            <h2>2500</h2>
                        </div>
                        <hr className="my-4"/>
                        <div className="flex justify-between">
                            <h2 className="text-gray">총 가격</h2>
                            <h2>{ productPrice + 2500}</h2>
                        </div>
                        <button className="bg-purewhite text-main hover:bg-zinc-300 w-full py-2 mt-4 font-bold">주문하기</button>
                    </div>
                </form>
            </div>
        );
}