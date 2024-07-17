import Image from "next/image";
import Link from "next/link";

export default function Card({href='/', w='w-48'}) {
    return (
        <Link href={href}>
            <article className="border-zinc-900 overflow-hidden transition-all">
                <div className={`mb-1 aspect-card overflow-hidden border-2 border-zinc-900 rounded-md w- ${w}`}>
                    <Image className="h-full object-cover" src={'/덤불속.png'} alt="너구리" width={500} height={500}/>
                </div>
                <p className="text-zinc-500 text-sm">오잉크 게임즈</p>
                <h3 className="text-lg mt-1 mb-3">덤불속</h3>
                <div className="flex justify-between">
                    <div className="bg-red-700 px-3 content-center rounded-md text-xs font-bold">-60%</div>
                    <p className="text-right text-xl font-bold">₩28800</p>
                </div>
            </article>
        </Link>
    );
}