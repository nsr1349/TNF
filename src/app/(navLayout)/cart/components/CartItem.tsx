'use client'
import { ProductType } from "../page"

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
                    이미지
                </div>
                <div className="flex-grow">
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <div>
                        <button className="bg-sub hover:bg-subhover px-2" onClick={()=> handleCartQuantity(id , -1)} type="button">-</button>
                        <input type="text" value={quantity} className="w-10 text-center bg-main" name={title} readOnly/>
                        <button className="bg-sub hover:bg-subhover px-2" onClick={()=> handleCartQuantity(id, + 1)} type="button">+</button>
                    </div>
                </div>
                <div>
                    <div>닫기</div>
                    <h2>{price*quantity}</h2>
                </div>
                
            </div>
        </>
    );
}