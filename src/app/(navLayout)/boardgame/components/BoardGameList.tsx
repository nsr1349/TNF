import Card from "@/app/component/Card";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";
import { BoardgameOptionsType } from "../page";
import CardFallback from "@/app/component/CardFallback";
interface BoardgameListProps {
    searchParams : BoardgameOptionsType
}

const PAGE_PRODUCT_COUNT = 16

export default async function BoardgameList({ searchParams } : BoardgameListProps) {
    const { page = 1, genre, people, brand, search = '' } = searchParams
    let query = supabase.from('boardGame').select('id,title,image,price,brand', { count: 'exact' })

    if (search) query = query.or(`title.ilike.%${search}%,brand.ilike.%${search}%`)
    if (genre) query = query.eq('genre', genre)
    if (people) query = query.eq('people', people)
    if (brand) query = query.eq('brand', brand)
    query = query.range((page - 1) * PAGE_PRODUCT_COUNT , (page * PAGE_PRODUCT_COUNT) - 1)

    const { data: boardGame, error, count } = await query

    if (!count) return

    return (
        <>
            <section className="w-full grid grid-cols-4 gap-x-8 gap-y-20">
                { boardGame?.map((boardGameData)=> 
                    <Card key={boardGameData.id} {...boardGameData}/>)}
            </section>
            <section className="mt-20 flex gap-2 justify-center">
                { Array.from({length: Math.ceil( count / PAGE_PRODUCT_COUNT )}, (v, i) => i + 1).map((a)=>
                    <Link key={a} href={{query: { ...searchParams, page: a}}} className={`w-8 py-2 rounded-sm text-center hover:bg-sub transition ${a == page && 'bg-sub'}`}>{a}</Link>
                )}
            </section>
        </>
    );
}
