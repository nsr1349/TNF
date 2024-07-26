'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { IoIosPaper, IoIosHelpCircle  } from "react-icons/io";

export default function Navbar() {
    const path = usePathname()

    return (
        <nav className="sm:border-t-1 sm:border-sub sm:fixed sm:bottom-0 sm:left-0 bg-main sm:w-full sm:h-16 relative w-fit flex gap-4 h-full flex-grow">
            {
                navList.map(({href,text,icon})=> 
                    <Link 
                        key={href} 
                        href={href} 
                        className={"center px-4 font-bold transition sm:flex-grow hover:text-purewhite " + (path.indexOf(href) === 0 ? 'text-purewhite' : 'text-gray')} >
                        <span className='text-2xl hidden sm:block'>{ icon }</span>
                        <span>{text}</span>
                    </Link>
                )
            }
        </nav>
    );
}

const navList = [
    {
        href : '/boardgame',
        text : '보드게임',
        icon : <MdHomeFilled/>
    },
    {
        href : '/news',
        text : '새소식',
        icon : <IoIosPaper/>
    },
    {
        href : '/about',
        text : '소개',
        icon : <IoIosHelpCircle/>
    },
]