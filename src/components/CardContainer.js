import { resData } from "../utils/constants";
import Card from "./Card";
const CardContainer = () => {
    const restData = JSON.parse(resData);
    const filterData = restData.slice(2);

    
    return (
        <div className="my-2 mx-3">
            
            <div className="flex flex-wrap justify-around after:flex-auto">
                {filterData.map(item => (
                    <Card data={item} />
                ))}
            </div>
            
        </div>
    );
}
export default CardContainer;