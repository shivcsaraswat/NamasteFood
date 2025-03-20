
// ShimmerCard 
export const ShimmerCard = () => { 
    return (
        <div className = "border bg-gray-50 min-w-[300px] mx-[10px] my-[10px]  min-h-[500px] shadow-lg ">
                 This is shimmer card
        </div>
    );
}


export const ShimmerBody = () => { 
    const length = 100;
    return (
    <div className = "shimmer-body">
        <div className = "shimmer-res-container flex flex-wrap">
            {
               Array.from({ length: 21 }).map((_, i) => <ShimmerCard key = {i} />)
            }
            
        </div>
    </div>
    );
}


