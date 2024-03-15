
const ShimmerCard = () => {
    return (
        <div>
          <div className="inline-block rounded-xl w-52 mx-2 my-3 animate-pulse">
            <div className="relative h-40 w-full">
              <div
                className="w-full h-full rounded-xl object-cover bg-gray-600"
              />
              
            </div>
            <div className="px-1">
              <div className="mt-3 bg-gray-600 w-3/4 h-4"></div>
              <div className="mt-2 bg-gray-600 w-3/4 h-4"></div>
              <div className="bg-gray-600"> </div>
              <div className="bg-gray-600"></div>
            </div>
          </div>
        </div>
      );
}

export default ShimmerCard;