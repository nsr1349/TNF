export const revalidate = 0

import BoardgameFilter from "./components/BoardgameFilter";
import BoardgameList from "./components/BoardGameList";
import { Suspense } from "react";
import BoardgameListFallback from "./components/BoardgameListFallback";

export interface BoardgameOptionsType { 
  page? : number
  genre? : string
  people? : string
  brand? : string
  search? : string
}

interface BoardgameProps {
  searchParams : BoardgameOptionsType
}

export default async function page({ searchParams } : BoardgameProps) {
  return (
    <div className="w-container px-4">
      <BoardgameFilter searchParams={searchParams}/>
      <Suspense fallback={<BoardgameListFallback/>}>
        <BoardgameList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
