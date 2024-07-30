import { Skeleton } from "@/app/component/Skeleton";

export default async function BoardgameDetailFallback() {

  return (
    <>
        <section className="flex mt-14 gap-16 mb-20 animate-pulse">
            <div className="w-[400px]">
                <Skeleton className='aspect-square w-full mb-4'/>
                <Skeleton className='w-full h-24'/>
            </div>
            <div className="flex-grow flex flex-col">
                <div className="flex-grow">
                    <Skeleton className='w-20 h-12'/>
                    <Skeleton className='w-48 h-6 mt-4 mb-8'/>
                    <div className="flex flex-col gap-2">
                        <Skeleton className='w-40 h-6'/>
                        <Skeleton className='w-40 h-6'/>
                        <Skeleton className='w-40 h-6'/>
                        <Skeleton className='w-40 h-6'/>
                    </div>
                </div>
                <div>
                    <hr className="border-sub"/>
                    <div className="flex justify-between my-4">
                        <Skeleton className='w-20 h-12'/>
                        <Skeleton className='w-36 h-12'/>
                    </div>
                    <Skeleton className='w-full h-16'/>
                </div>
            </div>
        </section>
        <section >
          
        </section>
    </>
  );
}

