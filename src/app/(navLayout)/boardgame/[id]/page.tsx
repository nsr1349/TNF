import BoardgameDetail from "./components/BoardgameDetail";
import { Suspense } from "react";
import BoardgameDetailFallback from "./components/BoardgameDetailFallback";

interface BoardgameDetailProps {
  params : { 
    id : string
  }
}

export default async function page({ params : { id } }: BoardgameDetailProps) {
  return (
    <div className="w-full max-w-[900px] px-4">
      <Suspense fallback={<BoardgameDetailFallback/> }>
        <BoardgameDetail id={id}/>
      </Suspense>
    </div>
  );
}

