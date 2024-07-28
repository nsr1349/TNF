'use client'
import { ProductType } from "../page"
import Image from "next/image"
import { IoCloseOutline } from "react-icons/io5";

interface CartItemProps {
    product : ProductType
    handleCartQuantity : (targetId : string , num : number)=> void
}

export default function CartItem({ product, handleCartQuantity, ...props } : CartItemProps) {
    const { id , image, price, quantity, title } = product
    return (
        <>
            <div className="flex" {...props}>
                <div>
                    <Image src={image} alt={title} width={100} height={100}></Image>
                </div>
                <div className="flex-grow content-center">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-gray mb-2">{price}</p>
                    <div>
                        <button className="bg-sub hover:bg-subhover px-2" onClick={()=> handleCartQuantity(id , -1)} type="button">-</button>
                        <input type="text" value={quantity} className="w-10 text-center bg-main" name={title} readOnly/>
                        <button className="bg-sub hover:bg-subhover px-2" onClick={()=> handleCartQuantity(id, + 1)} type="button">+</button>
                    </div>
                </div>
                <div className="relative content-end">
                    <IoCloseOutline className="text-3xl absolute top-0 right-0 "/>
                    <h2 className="text-xl">{price*quantity}</h2>
                </div>
            </div>
        </>
    );
}