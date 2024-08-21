import { supabase } from "@/utils/supabase/client";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export default async function HomeNews({...props}) {
    const  { data: news, error } = await supabase.from('news').select('id,title,image,category').range(0,1)

    return (
        <section className="max-w-[900px] w-full">
            <h3 className="text-2xl font-bold mb-6">새 소식</h3>
            <div className="flex gap-4 ">
                {
                    news?.map(({id,image,title,category})=>                
                        <Link href={`/news/${id}`} className="bg-subhover h-80 w-full relative bg-center bg-cover" key={id}  style={{background : `url(${image})`}}>
                            <div className="absolute w-full font-bold px-4 bottom-0 pb-6 bg-gradient-to-t from-black">
                                <div className="bg-red-700 w-fit px-4 py-1 rounded-lg mb-2">{category}</div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-3xl ">{title}</h3>
                                    <FaAngleRight className="text-2xl"/>
                                </div>
                            </div>
                        </Link>)
                }
            </div>
        </section>
    );
}