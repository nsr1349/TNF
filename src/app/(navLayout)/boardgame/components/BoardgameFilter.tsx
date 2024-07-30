'use client'
import { useState } from "react";
import { FaFilter , FaSearch} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'

interface BoardgameFilterProps {
    searchParams : { 
        page? : number
        genre? : string
        people? : string
        brand? : string
        search? : string
    }
}

const filterOptions = [
    {
        Name : '인원' ,
        options : [ '1인용', '2인용', '다인용']
    },
    {
        Name : '브랜드' ,
        options : [ '오잉크 게임즈', '만두 게임즈', '조엔', '디자인연']
    },
    {
        Name : '장르' ,
        options : ['전략', '추리', '블러핑']
    },
]

export default function BoardgameFilter({ searchParams } : BoardgameFilterProps) {
    const { genre, people, brand, search = '' } = searchParams
    const [ isOpenModal , setIsOpenModal ] = useState(false)
    const router = useRouter();
    // const formRef = useRef<HTMLFormElement>(null);

    const handleRadioChecked = (e : React.MouseEvent)=> {
        e.preventDefault()
        const target = (e.target as HTMLElement).previousElementSibling;
        if (target && target instanceof HTMLInputElement && target.type === 'radio') {
            target.checked = !target.checked
        }
    }

    const filterAction = (formData : FormData) => {
        const genre = formData.get('장르')
        const people = formData.get('인원')
        const brand = formData.get('브랜드')
        const search = formData.get('search')

        router.push(`?${!!genre ? `genre=${genre}&` : ''}${!!people ? `people=${people}&` : ''}${!!brand ? `brand=${brand}&` : ''}${!!search ? `search=${search}` : ''}`)
        setIsOpenModal(false)
    }

    return (          
        <section className="w-full py-10">
            <form action={filterAction} className="flex w-full items-center">
                {isOpenModal && 
                    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-50 center">
                        <div className="bg-main w-4/5 max-w-[1000px] px-10 py-10 relative">
                            <div className="absolute top-10 right-10 text-4xl" onClick={()=>setIsOpenModal(false)}>
                                <IoCloseOutline />
                            </div>
                            <div className="flex items-center">
                                <FaFilter className='text-purewhite'/>
                                <h3 className="flex-grow ml-4 font-bold text-lg">필터</h3>
                            </div>
                            <div >
                                <div className="flex gap-10 my-12 text-xl" onClick={handleRadioChecked}>
                                {filterOptions.map(({Name, options})=>
                                    <div key={Name}>
                                        <h3 className="font-bold">{Name}</h3> 
                                        <ul className="space-y-4 pt-4">
                                            {options.map((optionName)=>
                                                <li key={optionName} > 
                                                    <input type="radio" name={Name} defaultValue={optionName} id={optionName} className="hidden peer" />
                                                    <label htmlFor={optionName} className="peer-checked:text-point peer-checked:font-bold text-gray select-none hover:text-zinc-400" >{optionName}</label>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="bg-purewhite text-main text-lg py-2 px-10 font-bold hover:bg-zinc-400 transition-all">적용하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div onClick={() => setIsOpenModal(true)} className="flex items-center flex-grow">
                    <div>
                        <FaFilter className={`${ genre || people || brand ? 'text-purewhite' : 'text-gray'}`}/>
                    </div>
                    <h3 className="flex-grow ml-4 font-bold text-lg">
                    {genre || people || brand ? <>
                        <span className="text-point">{people && people} {brand && brand + '의 '} {genre && genre}</span> 
                        <span> 게임만 보기! </span>
                        </> : <span className="text-gray">필터 미적용</span>}
                    </h3>
                </div>
                <div className="relative">
                    <input 
                        type="text" 
                        name='search'
                        className="bg-[rgba(0,0,0,0)] border-sub border-1 p-2 px-4 pr-12 rounded-full focus:outline-none focus:main"
                    />
                    <button className="absolute right-4 inset-y-0 content-center text-xl" type="submit" value={search}>
                        <FaSearch/>
                    </button>
                </div>
            </form>
        </section>
    );
}