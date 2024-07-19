import Card from "../../component/Card";
import { FaFilter, FaSearch  } from "react-icons/fa";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";

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
  let query = supabase
  .from('boardGame')
  .select('id,title,image,price,brand', { count: 'exact' })

  if (search) query = query.or(`title.ilike.%${search}%,brand.ilike.%${search}%`)
  if (genre) query = query.eq('genre', genre)
  if (people) query = query.eq('people', people)
  if (brand) query = query.eq('brand', brand)
  query = query.range((page - 1) * 16 , (page * 16) - 1)

  const { data: boardGame, error, count } = await query
  console.log(boardGame)

  return (
    <>
    <section className="flex w-full items-center max-w-[860px] my-10">
      <div>
        <FaFilter className={`${ genre || people || brand ? 'text-zinc-200' : 'text-zinc-500'}`}/>
      </div>
      <h3 className="flex-grow ml-4 font-bold text-lg">
        {
          genre || people || brand ? <>
          {people ? <span className="text-indigo-600">{people}</span> : ''}
          {brand ? <span className="text-indigo-600">{brand}의</span> : ''}
          {genre ? <span className="text-indigo-600">{genre}</span> : ''}
          게임만 보기! 총 {count}개 
          </> : <span className="text-zinc-500">필터 미적용</span>
        }
      </h3>
      <div className="relative">
        <input value={search} type="text" className="bg-[rgba(0,0,0,0)] border-zinc-800 border-1 p-2 px-4 pr-12 rounded-full focus:outline-none focus:bg-zinc-900"/>
        <div className="absolute right-4 inset-y-0 content-center text-xl">
          <FaSearch/>
        </div>
      </div>
    </section>
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
