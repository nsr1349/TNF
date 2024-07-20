export const revalidate = 0

import Card from "../../component/Card";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";
import BoardgameFilter from "./components/BoardgameFilter";

interface BoardgameProps {
  searchParams : { 
    page? : number
    genre? : string
    people? : string
    brand? : string
    search? : string
  }
}

export default async function Boardgame({ searchParams } : BoardgameProps) {
  const { page = 1, genre, people, brand, search = '' } = searchParams
  let query = supabase.from('boardGame').select('id,title,image,price,brand', { count: 'exact' })

  if (search) query = query.or(`title.ilike.%${search}%,brand.ilike.%${search}%`)
  if (genre) query = query.eq('genre', genre)
  if (people) query = query.eq('people', people)
  if (brand) query = query.eq('brand', brand)
  query = query.range((page - 1) * 16 , (page * 16) - 1)

  const { data: boardGame, error, count } = await query

  return (
    <>
      <BoardgameFilter count={count} searchParams={searchParams}/>
      <section className="grid grid-cols-4 gap-x-8 gap-y-20">
          { boardGame?.map((boardGameData)=> 
            <Card key={boardGameData.id} {...boardGameData}/>)
          }
      </section>
      <section className="mt-10">
        <Link href={{query: { ...searchParams, page: 2}}}>2</Link>
      </section>
    </>
  );
}
