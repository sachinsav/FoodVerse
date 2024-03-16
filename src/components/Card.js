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

  const cuisinesrawString = cuisines?.join(", ");
  const cuisinesString = cuisinesrawString;
  
  return (
    <div>
      <div className="inline-block rounded-xl w-52 mx-2 my-3 text-gray-700">
        <div className="relative h-40 w-full">
          <img
            src={baseCardImgUrl + cloudinaryImageId}
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-xl">
            <h1 className="font-extrabold text-lg text-white px-2 pt-5">{disCountString}</h1>
          </div>
        </div>
        <div className="px-1 mt-2">
          <h2 className="font-bold text-xl -mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
          <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            <GradeIcon className="text-green-600" fontSize="small"/>
            &nbsp;{avgRating} . {sla?.slaString}
          </h3>
          <p className="font-thin text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{cuisinesString}</p>
          <p className="font-thin text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
