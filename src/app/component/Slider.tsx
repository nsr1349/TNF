'use client'

import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const slideImages = [
    {
        img : '/슬라이드/보드게임슬라이드1.jpg',
        link : '/boardgame/1'
    },
    {
        img : '/슬라이드/보드게임슬라이드2.jpg',
        link : '/boardgame/2'
    },
    {
        img : '/슬라이드/보드게임슬라이드3.jpg',
        link : '/boardgame/3'
    },
]

export default function Slider() {
    const [ slideIdx , setSlideIdx ] = useState(0)
    const len = slideImages.length

    const moveSlide = (moveNum : number) => {
        setSlideIdx((currntIdx)=> {
            const newIdx = currntIdx + moveNum
            if (newIdx === -1) return len - 1
            if (newIdx === len) return 0
            return newIdx
        })
    }

    return (
        <>
            <div className="sm:h-[220px] relative w-full h-[600px] overflow-hidden bg-center bg-cover bg-no-repeat transition-all" style={{backgroundImage : `url(${slideImages[slideIdx].img})`}} onClick={() => console.log(1)}>  
                <button className="sm:w-12 w-20 absolute left-0 inset-y-0 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.5)] transition-all center text-4xl" onClick={()=> moveSlide(-1)}><IoIosArrowBack/></button>
                <button className="sm:w-12 w-20 absolute right-0 inset-y-0 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.5)] transition-all center text-4xl" onClick={()=> moveSlide(1)}><IoIosArrowForward/></button>
                <Link className="absolute h-full w-[calc(100%_-_10rem)] left-20" href={slideImages[slideIdx].link}/>
            </div>
            <div className=" w-fit flex gap-3 mt-4">
                {
                    slideImages.map((_, i) => 
                        <button key={i} className={`rounded-full w-2 aspect-square transition-all ${slideIdx === i ? 'bg-purewhite scale-150' : 'bg-gray'}`} onClick={()=> setSlideIdx(i)} />
                )}
            </div>
        </>
    )
}
