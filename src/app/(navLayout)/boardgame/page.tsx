import Card from "../component/Card";
import { FaFilter, FaSearch  } from "react-icons/fa";
import Link from "next/link";

interface BoardgameProps {
  searchParams : { 
    page? : number,
    genre? : string,
    people? : string,
    brand? : string
  }
}

export default function Boardgame({ searchParams } : BoardgameProps) {
  const { page = 1, genre, people, brand } = searchParams

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
          게임만 보기!
          </> : <span className="text-zinc-500">필터 미적용</span>
        }
      </h3>
      <div className="relative">
        <input type="text" className="bg-[rgba(0,0,0,0)] border-zinc-800 border-1 p-2 px-4 pr-12 rounded-full focus:outline-none focus:bg-zinc-900"/>
        <div className="absolute right-4 inset-y-0 content-center text-xl">
          <FaSearch/>
        </div>
      </div>
    </section>
    <section className="grid grid-cols-4 gap-x-8 gap-y-20">
        {Array.from({ length: 12 }, (_, index) => (
              <Card key={index} href="/boardgame/1"/>
        ))}
    </section>
    <section className="mt-10">
      <Link href={{query: { ...searchParams, page: 2}}}>2</Link>
    </section>
    </>
  );
}
