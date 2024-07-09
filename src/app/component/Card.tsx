import Image from "next/image";
import Link from "next/link";

export default function Card({href='/', w='w-44'}) {
    return (
        <Link href={href}>
            <article className="rounded-md border-[1px] border-zinc-900 overflow-hidden bg-zinc-950 transition-all hover:border-zinc-700 hover:bg-zinc-900">
                <div className={`aspect-4/5 overflow-hidden ${w}`}>
                    <Image className="h-full object-cover" src={'https://popcontr2632.cdn-nhncommerce.com/data/goods/23/11/48/93401/93401_main_03.jpg'} alt="너구리" width={500} height={500}/>
                </div>
                <div className="px-3 py-4">
                    <h3 className="font-bold text-xl">덤불속</h3>
                    <p className="text-zinc-500 text-sm">전략, 블러핑</p>
                    <p className="text-right text-xl">28800원</p>
                </div>
            </article>
        </Link>
    );
}