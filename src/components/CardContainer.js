import { useCallback, useEffect, useRef, useState } from "react";

import Card from "./Card";
import useRestData from "../utils/hooks/useRestData";
import ShimmerCard from "./ShimmerCard";
const CardContainer = () => {
    
    const {restData, hasMore, setPageNumber, pageNumber} = useRestData();
    const ref = useRef();
    const lastElement = useRef();
    useEffect(()=>{
        console.log("here u", hasMore, pageNumber )
        if(restData.length<=0) return;
        if(ref.current) ref.current.disconnect();
    
        
        ref.current = new IntersectionObserver((entries => {
            console.log(entries[0].isIntersecting)
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(prevPage => prevPage+1)
            }
        }));
        ref.current.observe(lastElement.current);
    },[restData])

    
    return (
        <div className="my-2 mx-3">
            
            <div className="flex flex-wrap justify-around overflow-x-hidden">
                {restData.map((item,ind) => {
                    if((ind+1)===restData.length){
                        return (<Card key={item.info.id} data={item} ref={lastElement}/>)
                    }else{
                        return <Card key={item.info.id} data={item} />
                    }
                    
                    })}
                {hasMore && <ShimmerCard key="thisisshimmer"/>}
            </div>
            <span ref={lastElement}>a</span>
            
        </div>
    );
}
export default CardContainer;