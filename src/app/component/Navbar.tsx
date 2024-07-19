'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Navbar() {
    const path = usePathname()

    return (
        <nav className="flex gap-4 h-full flex-grow">
            {
                navList.map(({href,text})=> 
                    <Link 
                        key={href} 
                        href={href} 
                        className={"h-full px-4 font-bold transition-all grid place-items-center hover:text-purewhite " + (path.indexOf(href) === 0 ? 'text-purewhite' : 'text-gray')} >
                        {text}
                    </Link>
                )
            }
        </nav>
    );
}

const navList = [
    {
        href : '/boardgame',
        text : '보드게임'
    },
    {
        href : '/news',
        text : '새소식'
    },
    {
        href : '/about',
        text : '소개'
    },
]