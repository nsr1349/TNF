import { Skeleton } from "./Skeleton";

export default function CardFallback({...props}) {
    return (
        <div className="animate-pulse w-48" {...props}>
            <Skeleton className="w-full aspect-square"/>
            <Skeleton className="w-20 h-4 my-2"/>
            <Skeleton className="w-36 h-6 mb-3"/>
            <div className="flex justify-between">
                <Skeleton className="w-14 h-8 content-center"/>
                <Skeleton className="w-24 h-8"/>
            </div>
        </div>
    );
}