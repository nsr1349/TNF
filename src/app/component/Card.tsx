import Image from "next/image";
import Link from "next/link";

interface CardProps {
    w? : string
    id : string
    title : string
    image : string
    price : number
    brand : string
}

export default function Card({ 
    w='w-48' ,
    id, 
    title, 
    image, 
    price, 
    brand,
    } : CardProps) {
    return (
        <Link href={`/boardgame/${id}`}>
            <article className="border-sub overflow-hidden transition-all">
                <div className={`mb-1 aspect-card overflow-hidden border-2 border-sub rounded-md w- ${w}`}>
                    <Image className="h-full object-cover" src={image} alt="너구리" width={500} height={500}/>
                </div>
                <p className="text-gray text-sm">{brand}</p>
                <h3 className="text-lg mt-1 mb-3">{title}</h3>
                <div className="flex justify-between">
                    <div className="bg-warning px-3 content-center rounded-md text-xs font-bold">-60%</div>
                    <p className="text-right text-xl font-bold">₩{price}</p>
                </div>
            </article>
        </Link>
    );
}