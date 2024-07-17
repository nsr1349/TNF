import Link from "next/link";
import { FaChessKnight, FaMapPin, FaFaceGrinTongue, FaBolt, FaPuzzlePiece, FaRightFromBracket} from "react-icons/fa6";
import Card from "./component/Card";

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
      <section className="w-full bg-zinc-500 min-h-96">
        <div>
          슬라이더
        </div>
      </section>
      <section className="flex gap-8 my-20">
        {
          categories.map(({icon,title})=>
            <Link key={title} href={`/boardgame?genre=${title}`} className="text-center group">
              <div className="text-3xl bg-zinc-900 h-20 aspect-square p-2 mb-4 rounded-full grid place-items-center transition-all group-hover:bg-zinc-800 group-hover:text-indigo-700">
                {icon}
              </div>
              <h6>{title}</h6>
            </Link>)
        }
      </section>
      <section className="max-w-[900px] w-full mb-20">
        <h3 className="text-2xl font-bold mb-6">새 신작</h3>
        <div className="flex justify-between">
          {Array.from({ length: 4 }, (_, index) => (
              <Card key={index}/>
          ))}
        </div>
      </section>
      <section className="max-w-[900px] w-full">
        <h3 className="text-2xl font-bold mb-6">곧 출시</h3>
        <div className="flex gap-4">
          <div className="bg-zinc-800 h-80 w-full">

          </div>
          <div className="bg-zinc-800 h-80  w-full">

          </div>
        </div>

      </section>
    </>
  );
}
