import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";
import { supabase } from "@/utils/supabase/client";

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
    category : '전체' | '공지' | '신작' | '대회' | undefined,
    page : number
  }
}

export default async function News({ searchParams }: NewsProps) {
  const { category = '전체', page = 1  } = searchParams
  let query = supabase.from('news').select('id,title,image,description,category,created_at')
  if (category !== '전체') query = query.eq('category', category)
  query = query.range((page - 1) * 10 , (page * 10) - 1)
  const { data: news, error } = await query

  return (
    <div className="w-full max-w-[1000px] px-4">
      <ul className="flex gap-4 my-10">
        {newsMenu.map(({title})=> 
            <li key={title} >
              <Link href={{query: { category : title,  page}}}
                className={`px-8 py-3 rounded-md ${category === title && 'bg-sub font-bold'}`}
              >{title}</Link>
            </li>)
        }
      </ul>
      <ul>
        {
          news?.map(({id,title,category,description,image,created_at})=>
            <li key={id}>
              <Link href={'/news/1'} className="flex h-36 group">
                <div className="border-1 border-sub h-full aspect-video mr-8 group-hover:border-subhover">
                  
                </div>
                <div className="flex-grow">
                  <h6 className="text-gray ">{created_at.substr(0, 10)}</h6>
                  <h3 className="text-2xl font-bold my-3">{title}</h3>
                  <h4 className="text-gray line-clamp-2">{description}</h4>
                </div>
                <div className="content-end ml-6">
                  <div className="w-12 aspect-square bg-sub center rounded-full transition-all text-xl group-hover:bg-subhover">
                    <FaAngleRight />
                  </div>
                </div>
              </Link>
            </li>
          )
        }
       
      </ul>
    </div>
  );
}
