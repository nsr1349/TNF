import Link from "next/link";
import { FaChessKnight, FaMapPin, FaFaceGrinTongue, FaBolt, FaPuzzlePiece, FaRightFromBracket} from "react-icons/fa6";
import Slider from "../component/Slider";;
import HomeBoardgames from "./components/HomeBoardgames";
import HomeNews from "./components/HomeNews";
import { Suspense } from "react";

const categories = [
  {
    title : '전략',
    icon : <FaChessKnight/>,
  },
  {
    title : '추리',
    icon : <FaMapPin/>,
  },
  {
    title : '블러핑',
    icon : <FaFaceGrinTongue/>,
  },
  {
    title : '트릭테이킹',
    icon : <FaPuzzlePiece/>,
  },
  {
    title : '순발력',
    icon : <FaBolt/>,
  },
  {
    title : '추상',
    icon : <FaPuzzlePiece/>,
  },
  {
    title : '방탈출',
    icon : <FaRightFromBracket/>,
  },
]

export default async function Home() {

  return (
    <>
      <Slider />
      <div className="px-4 w-container">
        <section className="flex gap-8 my-20 item-center justify-center">
          {categories.map(({icon,title})=>
              <Link key={title} href={`/boardgame?genre=${title}`} className="text-center group">
                <div className="text-3xl bg-sub h-20 aspect-square p-2 mb-4 rounded-full grid place-items-center transition-all group-hover:bg-subhover group-hover:text-point">
                  {icon}
                </div>
                <h6>{title}</h6>
              </Link>)}
        </section>
        <Suspense fallback={<></>}>
          <HomeBoardgames/>
        </Suspense>
        <Suspense fallback={<></>}>
          <HomeNews/>
        </Suspense>
      </div>
    </>
    
  );
}
