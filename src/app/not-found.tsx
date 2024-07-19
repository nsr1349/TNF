import Image from "next/image";
import Link from "next/link";

export default function notFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <div className='w-60'>
                <Image className="h-full object-cover" src={'/404.png'} alt="not-found" width={500} height={500}/>
            </div>
            <h1 className='text-3xl font-bold my-5' >페이지를 찾을 수 없습니다..</h1>
            <p className="text-gray mb-10">페이지가 변경되었을 수도 있습니다..</p>
            <Link href={'/'} className="bg-purewhite text-main font-bold text-xl px-20 py-4">홈 화면으로 가기</Link>
        </div>
    );
}