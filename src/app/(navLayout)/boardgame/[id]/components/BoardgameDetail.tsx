import Image from "next/image"
import { FaHeart, FaUser } from "react-icons/fa6";
import Tab from "./Tap";
import Stars from "./Stars";
import { supabase } from "@/utils/supabase/client";
import AddCartBtn from "./AddCartBtn";
import { createClient } from "@/utils/supabase/server"; 

interface BoardgameDetailProps {
    id : string
}

export default async function BoardgameDetail({ id }: BoardgameDetailProps) {
    const { data: boardGame } = await supabase.from('boardGame').select('*').eq('id', id).single()
    const { title, ageCut, brand, price, deliveryCharge, genre, image, peopleCut, playTime, point } = boardGame

    const supabaseServer = createClient();
    const { data: { user } } = await supabaseServer.auth.getUser();

    const detailTable = [
        {
            name : '브랜드',
            value : brand
        },
        {
            name : '장르',
            value : genre
        },
        {
            name : '베송비',
            value : deliveryCharge + '원'
        },
        {
            name : '적립금',
            value : point + 'p'
        }
    ]

    return (
        <>
            <section className="flex mt-14 gap-16 mb-20 sm:block sm:mt-4 sm:mb-10">
                <div>
                    <Image className="w-[400px] sm:w-full sm:min-w-0 border-sub border-2 mb-4 center object-cover" src={image} alt={title} width={1000} height={1000}/>
                    <div className='h-24 overflow-hidden border-sub border-2 sm:hidden'>
                        
                    </div>
                </div>
                <div className="flex-grow flex flex-col">
                    <div className="flex-grow">
                        <div className="flex mb-10 ">
                            <div className="flex-grow">
                                <h1 className="text-3xl font-extrabold">{title}</h1>
                                <p className="text-gray mt-4">{`${ageCut ? `${ageCut}세 이상` : '전체이용가'}, ${peopleCut}, ${playTime}`}</p>
                            </div>
                            <FaHeart size={30} className="text-gray"/>
                        </div>
                        <table>
                            <tbody>
                                {detailTable.map(({name,value})=>
                                    <tr key={name}>
                                        <td className="text-gray w-20">{name}</td>
                                        <td>{value}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <hr className="border-sub mt-10"/>
                    <div className="flex my-8">
                        <div className="border-1 border-warning text-warning px-4 content-center rounded-md text-base font-bold">-60%</div>
                        <div className="flex-grow" />
                        <h1 className="text-3xl font-extrabold ">
                        <span className="text-xl font-medium text-zinc-500 line-through mr-4">33000</span>
                        {price}
                        <span className="text-xl font-medium"> won</span></h1>
                    </div>
                    <AddCartBtn product_id={id} image={image} user_id={user?.id}/>
                </div>
            </section>
            <section className="w-full">
                <Tab labels={['상세정보' , '리뷰']}>
                    <div>상세정보 탭 !!!!!!!!!!!!!!</div>
                    <div>
                    <h3 className="font-bold text-xl mt-14 mb-4">리뷰 평균</h3>
                    <div className="bg-sub p-10 flex rounded-md item-center">
                        <span className="font-bold text-4xl">4 / 5 점</span>
                        <Stars score={4} size={28} className="ml-10"/>
                    </div>
                    <h3 className="font-bold text-xl mt-14 mb-4">리뷰</h3>
                    <div>
                        <div className="flex gap-4 mb-4">
                        <div className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center">
                            <FaUser />
                        </div>
                        <div>
                            <h6 className="text-gray mb-1">비공개</h6>
                            <Stars score={5}/>
                        </div>
                        </div>
                        <div className="border-1 border-sub p-4 px-6">
                        <p>재미남 ㅇㅇ ㅋ</p>
                        </div>
                    </div>
                    </div>
                </Tab>
            </section>
        </>
    );
}

