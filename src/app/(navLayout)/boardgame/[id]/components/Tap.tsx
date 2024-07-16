'use client'

import { useState } from "react";

interface TabProps {
    labels : string[]
    children : React.ReactNode[]
}

export default function Tab({labels, children} : TabProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <div className="flex  w-full text-xl border-b-1 border-zinc-900">
                {labels.map((a, i)=> 
                    <div className={`py-4 w-48 text-center border-zinc-900 rounded-t-md ${activeIndex === i && 'border-1'}`} key={a} onClick={()=> setActiveIndex(i)}>{a}</div>
                )}
            </div>
            <div>
                {children && children.map((child, i) => (
                <div key={i} className={`${activeIndex === i ? 'block' : 'hidden'}`}>
                    {child}
                </div>
                ))}
            </div>
        </>
    );
}

