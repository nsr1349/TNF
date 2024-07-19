import Image from "next/image"
import { BoardgameDetailItem } from "./mocks"
import { FaHeart, FaUser } from "react-icons/fa6";
import Tab from "./components/Tap";
import Stars from "./components/Stars";

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
    <div className="w-full max-w-[900px]">
    <section className="flex w-full max-w-[900px] mt-14 gap-16 mb-20">
        <div >
          <div className='aspect-square overflow-hidden border-sub border-2 mb-4'>
              <Image className="h-full object-cover scale-75" src={image} alt={title} width={400} height={400}/>
          </div>
          <div className='h-24 overflow-hidden border-sub border-2'>
              {/* <Image className="h-full object-cover scale-75" src={image} alt={title} width={420} height={420}/> */}
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex mb-10">
            <div className="flex-grow">
              <h1 className="text-3xl font-extrabold">{title}</h1>
              <p className="text-gray mt-4">{`${ageCut}세 이상, ${peopleCut}, ${playTime}`}</p>
            </div>
            <FaHeart size={30} className="text-gray"/>
          </div>
          <table>
              <tbody>
                <tr>
                  <td className="text-gray w-20">브랜드</td>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <td className="text-gray">장르</td>
                  <td>{genre.join(', ')}</td>
                </tr>
                <tr>
                  <td className="text-gray">베송비</td>
                  <td>{deliveryCharge}원</td>
                </tr>
                <tr>
                  <td className="text-gray">적립금</td>
                  <td>{point}p</td>
                </tr>
              </tbody>
          </table>
          <div className="flex-grow"></div>
          <div>
            <hr className="border-sub"/>
            <div className="flex my-8">
              <div className="border-1 border-warning text-warning px-4 content-center rounded-md text-base font-bold">-60%</div>
              <div className="flex-grow" />
              <h1 className="text-3xl font-extrabold ">
                <span className="text-xl font-medium text-zinc-500 line-through mr-4">33000</span>
                {price}
                <span className="text-xl font-medium"> won</span></h1>
            </div>
            <button className="w-full bg-purewhite text-main h-14 font-bold py-2 hover:bg-point transition-all duration-200">장바구니 담기</button>
          </div>
        </div>
      </section>
      <section className="w-full">
        <Tab labels={['공지사항' , '리뷰']}>
          <div>공지사항 탭 !!!!!!!!!!!!!!</div>
          <div>
            <h3 className="font-bold text-xl mt-14 mb-4">리뷰 평균</h3>
            <div className="bg-sub p-10 flex rounded-md item-center">
              <span className="font-bold text-4xl">4 / 5 점</span>
              <Stars score={4} size={28} className="ml-10"/>
            </div>
            <h3 className="font-bold text-xl mt-14 mb-4">리뷰</h3>
            <div>
              <div className="flex gap-4 mb-4">
                <div className="bg-sub h-10 w-10 p-2 rounded-full grid place-items-center">
                  <FaUser />
                </div>
                <div>
                  <h6 className="text-gray mb-1">비공개</h6>
                  <Stars score={5}/>
                </div>
              </div>
              <div className="border-1 border-sub p-4 px-6">
                <p>재미남 ㅇㅇ ㅋ</p>
              </div>
            </div>
          </div>
        </Tab>
      </section>
    </div>
      
    </>
  );
}

