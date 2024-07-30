import CardFallback from "@/app/component/CardFallback";
import { Skeleton } from "@/app/component/Skeleton";

export default async function BoardgameListFallback() {
    return (
        <>
            <section className="w-full grid grid-cols-4 gap-x-8 gap-y-20">
                { Array.from({length: 8}).map((_, i)=> 
                    <CardFallback key={i}/> )}
            </section>
            <section className="mt-20 flex gap-2 justify-center animate-pulse">
                { Array.from({length: 10}).map((_, i)=>
                    <Skeleton key={i} className='w-8 h-10'/> )}
            </section>
        </>
    );
}
