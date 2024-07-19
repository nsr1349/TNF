import { FaStar } from "react-icons/fa6";

export default function Stars({score = 0, size = 16, className = ''}) {
    return (
        <div className={`flex gap-2 items-center justify-center text-gray ${className}`}>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} size={size} className={`${score > i && 'text-point'}`}/>
            ))}
        </div>
    );
}
