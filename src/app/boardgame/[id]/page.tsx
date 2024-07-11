import Image from "next/image"
import { BoardgameDetailItem } from "./mocks"

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
      <section className="flex w-full max-w-[900px] mt-14 gap-16">
        <div >
          <div className='aspect-square overflow-hidden border-zinc-900 border-2'>
              <Image className="h-full object-cover scale-75" src={image} alt={title} width={420} height={420}/>
          </div>
          <div className='overflow-hidden'>
              {/* <Image className="h-full object-cover" src={'https://popcontr2632.cdn-nhncommerce.com/data/goods/23/11/48/93401/93401_main_03.jpg'} alt="너구리" width={500} height={500}/> */}
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex mb-8">
            <div className="flex-grow">
              <h1 className="text-3xl font-extrabold">{title}</h1>
              <p className="text-zinc-500 mt-4">{`${ageCut}세 이상, ${peopleCut}, ${playTime}`}</p>
            </div>
            <div>d</div>
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
            <h1 className="text-3xl font-extrabold my-8">{price}<span className="text-xl font-medium"> won</span></h1>
            <button className="w-full bg-white text-zinc-950 text-lg font-bold py-2 hover:bg-point hover:text-white transition-all duration-200 ">장바구니 담기</button>
          </div>
        </div>
      </section>
      <section>

      </section>
    </>
  );
}

