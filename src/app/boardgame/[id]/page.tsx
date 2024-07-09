interface BoardgameDetailProps {
  params : { 
    id : string
  }
}

export default function BoardgameDetail({ params }: BoardgameDetailProps) {
  const { id } = params
  return (
    <>
        <h1>{id}</h1>
        디테일 페이지
    </>
  );
}
