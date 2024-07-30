interface SkeletonProps {
    className? : string
}

export const Skeleton = ({className, ...props} : SkeletonProps) => {
    return <div className={`bg-sub rounded-sm ${className}`} {...props}/>
}