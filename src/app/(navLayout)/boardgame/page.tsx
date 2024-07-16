import Card from "../component/Card";

interface BoardgameProps {
  searchParams : { 
    page? : number,
    genre? : string,
    people? : string,
    brand? : string
  }
}

export default function Boardgame({ searchParams } : BoardgameProps) {
  const { genre, page = 1, people, brand } = searchParams
  console.log(genre)
  console.log(page)
  return (
    <>
    <div className="flex">
      <Card href="/boardgame/1"/>
    </div>
      
    </>
  );
}
