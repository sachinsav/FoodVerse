import {useState, useEffect} from 'react';
import { resData } from "../constants";
const  useRestData = () => {
    const [restData, setRestData] = useState([])
    const [restAllData, setRestAllData] = useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    const numberOfItem = 12;
    
    useEffect(()=>{
        setRestAllData(JSON.parse(resData))
    },[])

    useEffect(()=>{
        const start = (pageNumber-1)*numberOfItem
        const end = pageNumber*numberOfItem

        if(start>=restAllData.length){
            setHasMore(false)
            return;
        }else{
            setHasMore(true);
        }
        i=0
        while(i<10000000){
            i+=1
        }
        const newData = restAllData.slice(start, end)
        console.log("newDataArrived")
        setRestData(prevData => ([...prevData, ...newData]))
        if(end>=restAllData.length) setHasMore(false);
    
    }, [pageNumber, restAllData])




    return {restData, setPageNumber, hasMore, pageNumber}

}

export default useRestData;