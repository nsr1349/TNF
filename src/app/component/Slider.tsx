'use client'

import { useState } from "react"

interface TabProps {
    children : React.ReactNode[]
}

export default function Slider({ children } : TabProps) {
    const [ idx , setIdx ] = useState(0)
    const len = children.length

    return (
        <>  
            <div className="w-full h-[700px] overflow-hidden" >
                <div className='flex h-full transition'
                    style={{
                        width: `${len}00%`,
                        transform: `translateX(-${idx * 100}dvw)`
                    }}>
                    {children && children.map((child , i)=>
                        <div className="w-screen bg-green-800 flex-grow h-full" key={i}>{child}</div>
                    )}
                </div>
            </div>
            <div>{idx}</div>
            <button onClick={()=> setIdx(0 < idx ? idx-1 : idx)}>뒤로</button>
            <button onClick={()=> setIdx(idx < len-1 ? idx+1 : idx)}>앞으로</button>
        </>
    )
}
























                {/* {children && children.map((child, i)=>
                    <div key={i} >
                        {child}
                    </div>
                )} */}