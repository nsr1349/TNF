import Card from "@/app/component/Card";
import { supabase } from "@/utils/supabase/client";

export default async function HomeBoardgames({...props}) {
    const { data: boardGame, error } = await supabase.from('boardGame').select('*').range(0,3)
    
    return (
        <section className="max-w-[900px] w-full mb-20">
            <h3 className="text-2xl font-bold mb-6">새 신작</h3>
            <div className="flex justify-between">
                {boardGame?.map(({id, title, brand, image, price})=> 
                    <Card key={id} id={id} title={title} brand={brand} image={image} price={price}/> 
                )}
            </div>
        </section>
    );
}