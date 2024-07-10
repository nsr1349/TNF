import Image from "next/image"
import Link from "next/link"
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
      <section>
        <div>
          <div className='aspect-square overflow-hidden'>
              <Image className="h-full object-cover" src={image} alt={title} width={500} height={500}/>
          </div>
          <div className='overflow-hidden'>
              {/* <Image className="h-full object-cover" src={'https://popcontr2632.cdn-nhncommerce.com/data/goods/23/11/48/93401/93401_main_03.jpg'} alt="너구리" width={500} height={500}/> */}
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>{title}</h1>
              <span>{`${ageCut}세 이상, ${peopleCut}, ${playTime}`}</span>
            </div>
            <div>d</div>
          </div>
          <table>
              <tr>
                <td>브랜드</td>
                <td>{brand}</td>
              </tr>
              <tr>
                <td>장르</td>
                <td>{genre}</td>
              </tr>
              <tr>
                <td>베송비</td>
                <td>{deliveryCharge}</td>
              </tr>
              <tr>
                <td>적립금</td>
                <td>{point}</td>
              </tr>
          </table>
          <hr />
          <h1>{price}</h1>
          <button></button>
        </div>
      </section>
      <section>

      </section>
    </>
  );
}

