import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";

const newsMenu = [
  {
    title : '전체',
  },
  {
    title : '공지',
  },
  {
    title : '신작',
  },
  {
    title : '대회',
  },
]

interface NewsProps {
  searchParams : {
    newFilter : '전체' | '공지' | '신작' | '대회',
    page : number
  }
}

export default function News({ searchParams }: NewsProps) {
  const { newFilter = '전체', page = 1  } = searchParams
  console.log(newFilter)
  return (
    <div className="w-full max-w-[1000px] px-4">
      <ul className="flex gap-4 my-10">
        {newsMenu.map(({title})=> 
            <li key={title} >
              <Link href={{query: { newFilter: title,  page}}}
                className={`px-8 py-3 rounded-md ${newFilter === title && 'bg-zinc-800 font-bold'}`}
              >{title}</Link>
            </li>)
        }
      </ul>
      <ul>
        <li>
          <Link href={'/news/1'} className="flex h-36 group">
            <div className="border-1 border-zinc-900 h-full aspect-video mr-8 group-hover:border-zinc-800"></div>
            <div className="flex-grow">
              <h6 className="text-zinc-500 ">2024-07-14</h6>
              <h3 className="text-2xl font-bold my-3">8월 20일 사가니 리메이크 출시</h3>
              <h4 className="text-zinc-500 line-clamp-2">사가니는 어쩌구어쩌구한 게임입니다. 아무글자나 채워넣어야만 합니다. 아무글자나 채워넣어야만 합니다. 아무글자나 채워넣어야만 합니다. 아무글자나 채워넣어야만 합니다.</h4>
            </div>
            <div className="content-end ml-6">
              <div className="w-12 aspect-square bg-zinc-900 center rounded-full transition-all text-xl group-hover:bg-zinc-800">
                <FaAngleRight />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
