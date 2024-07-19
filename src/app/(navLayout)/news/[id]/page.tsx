import { supabase } from "@/utils/supabase/client";

interface NewsDetailProps {
    params : { 
        id : string
    }
}

export default async function NewsDetail({ params } : NewsDetailProps) {
    const { id } = params
    const { data: { title, category, image, created_at, content} } = await supabase.from('news').select('*').eq('id', id).single()
    console.log(title)
    return (
        <div className="w-full max-w-[1000px] px-6">
            <div className="w-fit px-5 py-1 rounded-md bg-point font-bold mt-8 mb-5">{category}</div>
            <h1 className="font-bold text-3xl">{title}</h1>
            <div className="w-full aspect-video border-1 border-sub rounded-md mt-5">
                
            </div>
            <pre className="font-sans py-10">{content}</pre>
            <p className="text-gray text-right w-full">{created_at.substr(0, 10)}</p>
            <hr className="border-sub mt-5"/>
        </div>
    );
}
