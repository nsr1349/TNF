import Image from "next/image"
import { BoardgameDetailItem } from "./mocks"
import { FaHeart } from "react-icons/fa6";
import Tab from "./components/Tap";

interface BoardgameDetailProps {
  params : { 
    id : string
  }
}

export default function BoardgameDetail({ params }: BoardgameDetailProps) {
  const { id } = params
  const {_id, title, ageCut, brand, price, deliveryCharge, explain, genre, image, peopleCut, playTime, point, relatedProducts, review } = BoardgameDetailItem
  console.log(id)

  return (
    <>
      <section className="flex w-full max-w-[1000px] mt-14 gap-16 mb-20">
        <div >
          <div className='aspect-square overflow-hidden border-zinc-900 border-2 mb-4'>
              <Image className="h-full object-cover scale-75" src={image} alt={title} width={400} height={400}/>
          </div>
          <div className='h-24 overflow-hidden border-zinc-900 border-2'>
              {/* <Image className="h-full object-cover scale-75" src={image} alt={title} width={420} height={420}/> */}
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex mb-10">
            <div className="flex-grow">
              <h1 className="text-3xl font-extrabold">{title}</h1>
              <p className="text-zinc-500 mt-4">{`${ageCut}세 이상, ${peopleCut}, ${playTime}`}</p>
            </div>
            <FaHeart size={30} className="text-zinc-500"/>
          </div>
          <table>
              <tbody>
                <tr>
                  <td className="text-zinc-500 w-20">브랜드</td>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <td className="text-zinc-500">장르</td>
                  <td>{genre.join(', ')}</td>
                </tr>
                <tr>
                  <td className="text-zinc-500">베송비</td>
                  <td>{deliveryCharge}원</td>
                </tr>
                <tr>
                  <td className="text-zinc-500">적립금</td>
                  <td>{point}p</td>
                </tr>
              </tbody>
          </table>
          <div className="flex-grow"></div>
          <div>
            <hr className="border-zinc-900"/>
            <div className="flex my-8">
              <div className="border-1 border-red-700 text-red-700 px-4 content-center rounded-md text-xs font-bold">-60%</div>
              <div className="flex-grow" />
              <h1 className="text-3xl font-extrabold ">
                <span className="text-xl font-medium text-zinc-500 line-through mr-4">33000</span>
                {price}
                <span className="text-xl font-medium"> won</span></h1>
            </div>
            <button className="w-full bg-indigo-700 h-14 font-bold py-2 hover:bg-indigo-600 transition-all duration-200 ">장바구니 담기</button>
          </div>
        </div>
      </section>
      <section className="w-full">
        <Tab labels={['공지사항' , '리뷰']}>
          <div>공지사항 탭 !!!!!!!!!!!!!!</div>
          <div>
            <h3>리뷰 평균</h3>
            <div>
              <span>4/5 점</span>
              <div>별</div>
            </div>
            <h3>리뷰</h3>
            <div>
              <div>
                <div>아바타</div>
                <div>
                  <h6>비공개</h6>
                  <div>별</div>
                </div>
              </div>
              <div>
                <p>재미남 ㅇㅇ ㅋ</p>
              </div>
            </div>
          </div>
        </Tab>
      </section>
    </>
  );
}

