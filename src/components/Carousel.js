import { useEffect, useState } from "react";
import { cd, baseImgUrl } from "../utils/constants";
const Carousel = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  const isLeftDisabled = startIndex===0;
  const isRightDisabled = startIndex === (data.length - itemsToShow);

  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
        setItemsToShow(12);
      } else if (screenWidth >= 992) {
        setItemsToShow(8);
      } else if (screenWidth >= 768) {
        setItemsToShow(7);
      } else {
        setItemsToShow(4);
      }
  };

  useEffect(() => {
    (async function () {
      const cdata = await JSON.parse(cd);
      setData(cdata);
    })();
  }, []);


  useEffect(() => {
    updateItemsToShow(); // Initial calculation on mount
    window.addEventListener('resize', updateItemsToShow);
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);


  const scrollLeft = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex(Math.min(startIndex + 1, data.length - itemsToShow));
  };
  const containerStyle = {
    display: "flex",
    justifyContent:"space-around",
    flexWrap: "nowrap",
    overflow: "hidden",
    alignItem: "center",
    height: "7rem"
    
  };
  return (
    <div className="py-3 shadow-sm">
      <div className="relative px-3">
        <div style={containerStyle}>
          {data.map((item, ind) => (
            <div key={item.id} className={`${(ind<(startIndex+itemsToShow) && ind>=startIndex)?'displayItem':'hideItem'}`}>
              <img src={baseImgUrl + item.imageId} alt={item.id} className={`h-full w-auto`}/>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            className={`text-white ${isLeftDisabled?'bg-gray-500':'bg-orange-400'} p-2 rounded`}
            onClick={scrollLeft}
            disabled={startIndex === 0}
          >
            &lt;
          </button>
          <button
            className={`text-white ${isRightDisabled?'bg-gray-500':'bg-orange-400'} p-2 rounded`}
            onClick={scrollRight}
            disabled={startIndex === data.length - itemsToShow}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
