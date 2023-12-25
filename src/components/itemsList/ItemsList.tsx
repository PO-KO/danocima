import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Item from "../item/Item";
import { ItemsListTypes } from "../../types/types";
import Carousel from "nuka-carousel";

const ItemsList = ({ data, heading }: ItemsListTypes) => {
  // const sliderRef = useRef<HTMLDivElement>(null!);
  // const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  // const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);

  // const handleClick = (direction: string) => {
  //   let distance = sliderRef.current.getBoundingClientRect().x - 4;
  //   let itemWidth =
  //     sliderRef.current.children[0].children[0].getBoundingClientRect().width;
  //   // Controling slider with left arrow
  //   if (direction === "left" && showLeftArrow) {
  //     sliderRef.current.style.transform = `translateX(${
  //       itemWidth + distance
  //     }px)`;
  //   }
  //   // Controling slider with right arrow
  //   if (direction === "right" && showRightArrow) {
  //     sliderRef.current.style.transform = `translateX(${
  //       distance - itemWidth
  //     }px)`;
  //   }
  // };

  // const lastChild = data[data.length - 1].id;
  // const firstChild = data[0].id;

  return (
    <div className="mb-10">
      <h1 className="section title text-sm sm:text-xl font-semibold mb-4 mt-3 pl-4  ">
        Popular
        <span className="bg-secondary px-2 ml-1 rounded-sm sm:text-lg">
          {heading}
        </span>
      </h1>
      <div className="wrapper overflow-hidden relative">
        {/* {showLeftArrow && (
          <div
            className="indicator left absolute top-0 left-0 z-10 h-full w-10 bg-secondary flex justify-center items-center cursor-pointer"
            onClick={() => handleClick("left")}
            style={{
              background:
                "linear-gradient(to right,rgba(0,0,0,.8) 0%, transparent 88%)",
            }}
          >
            <ArrowBackIos />
          </div>
        )} */}
        <Carousel
          slidesToShow={8}
          cellSpacing={3}
          defaultControlsConfig={{
            nextButtonText: <ArrowForwardIos />,
            prevButtonText: <ArrowBackIos />,
            containerClassName: "h-full",
            nextButtonClassName: "h-full",
            prevButtonClassName: "h-full",
          }}
          dragging={false}
          enableKeyboardControls={true}
          wrapAround={true}
        >
          {data.map((item) => {
            return (
              <Item
                key={item.id}
                {...item}
                // lastChild={lastChild}
                // firstChild={firstChild}
                // setShowRightArrow={setShowRightArrow}
                // setShowLeftArrow={setShowLeftArrow}
              />
            );
          })}
        </Carousel>
        {/* <div className="slider transition-transform" ref={sliderRef}>
          <div className="flex gap-1"></div>
        </div> */}
        {/* {showRightArrow && (
          <div
            className="indicator right absolute top-0 right-0 z-10 h-full w-10 bg-secondary flex justify-center items-center cursor-pointer"
            onClick={() => handleClick("right")}
            style={{
              background:
                "linear-gradient(to left,rgba(0,0,0,1) 0%, transparent 88%)",
            }}
          >
            <ArrowForwardIos />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ItemsList;
