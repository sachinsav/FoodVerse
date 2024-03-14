import { baseCardImgUrl } from "../utils/constants";
import GradeIcon from "@mui/icons-material/Grade";

const Card = ({ data }) => {
//   console.log(data);

  const {
    id,
    name,
    cloudinaryImageId,
    costForTwo,
    sla,
    avgRating,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
  } = data?.info;
  const disCountString =
    (aggregatedDiscountInfoV3?.header ?? '') +
    " " +
    (aggregatedDiscountInfoV3?.subHeader ?? '')
console.log(data)
  const cuisinesrawString = cuisines?.join(", ");
  const cuisinesString = cuisinesrawString.length>20?cuisinesrawString.slice(0,17)+"...":cuisinesrawString;
  
  return (
    <div>
      <div className="inline-block rounded-xl min-w-52 mx-2 my-3">
        <div className="relative h-40 w-full">
          <img
            src={baseCardImgUrl + cloudinaryImageId}
            className="w-full h-full rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-xl">
            <h1 className="font-extrabold text-lg text-white px-2 py-1">{disCountString}</h1>
          </div>
        </div>
        <div className="px-1">
          <h2 className="font-bold">{name}</h2>
          <h3 className="font-bold">
            <GradeIcon className="text-green-600"/>
            {avgRating} . {sla?.slaString}
          </h3>
          <h5>{cuisinesString} </h5>
          <h5>{areaName}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
