import { useEffect, useState } from "react";
import { cd, baseImgUrl } from "../utils/constants";
const Carousel2 = () => {
  const [data, setData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const isLeftDisabled = scrollPosition===0;



  useEffect(() => {
    (async function () {
      const cdata = await JSON.parse(cd);
      setData(cdata);
    })();
  }, []);



  const handleMove = (direction) => {
    const container = document.getElementById("container");
    const containerWidth = container.scrollWidth;
    const screeenWidth = container.clientWidth;
  
    const itemWidth = 3*(containerWidth/data.length);
    const maxScrollPosition = containerWidth - screeenWidth;
    let newScrollPosition;

    if (direction === "left") {
      newScrollPosition = Math.max(0, scrollPosition - itemWidth);
    } else {
      newScrollPosition = Math.min(maxScrollPosition, scrollPosition + itemWidth);
    }
    
    setIsRightDisabled(newScrollPosition==maxScrollPosition);
    
    setScrollPosition(newScrollPosition);
    container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  }

  const containerStyle = {
    display: "flex",
    justifyContent:"flex-start",
    flexWrap: "nowrap",
    overflow: "hidden",
    height: "7rem"
    
  };

 
  return (
    <div className="py-3 shadow-sm bg-slate-00 h-">
      <h1 className="px-5 font-extrabold text-xl text-gray-900">What's on your mind?</h1>
      <div className="relative px-5">
        <div style={containerStyle} id="container">
          {data.map((item, ind) => (
            <div key={item.id} className="flex-[0_0_auto]">
              <img src={baseImgUrl + item.imageId} alt={item.id} className={`h-full w-full mx-1`}/>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            className={`text-white ${isLeftDisabled?'bg-gray-500':'bg-orange-400'} p-2 rounded`}
            onClick={()=>handleMove("left")}
            disabled={isLeftDisabled}
          >
            &lt;
          </button>
          <button
            className={`text-white ${isRightDisabled?'bg-gray-500':'bg-orange-400'} p-2 rounded`}
            onClick={()=> handleMove("right")}
            disabled={isRightDisabled}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
