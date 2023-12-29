import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Item from "../item/Item";
import { ItemsListTypes } from "../../types/types";
import Carousel from "nuka-carousel";
import useGetWindowSize from "../../hooks/useGetWindowSize";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";

const ItemsList = ({ data, heading }: ItemsListTypes) => {
  const { windowWidth } = useGetWindowSize();
  const { data: genres, isLoading, isError } = useGenresMoviesData();

  const slidesToShow = () => {
    if (windowWidth < 481) return 4;
    if (windowWidth < 769) return 5;
    if (windowWidth < 1025) return 6;
    if (windowWidth < 1200) return 7;
    return 8;
  };

  const carouselSettings = {
    slidesToShow: slidesToShow(),
    cellSpacing: 3,
    defaultControlsConfig: {
      nextButtonText: <ArrowForwardIos />,
      prevButtonText: <ArrowBackIos />,
      containerClassName: "h-full",
      nextButtonClassName: "h-full",
      prevButtonClassName: "h-full",
      pagingDotsStyle: {
        display: "none",
      },
    },
    dragging: false,
    enableKeyboardControls: true,
    wrapAround: true,
    withoutControls: windowWidth < 700 ? true : false,
  };
  return (
    !isLoading &&
    !isError && (
      <div className="mb-10">
        <h1 className="section title text-sm sm:text-xl font-semibold mb-4 mt-3 pl-4  ">
          <span className="bg-secondary px-2 mr-2 rounded-sm sm:text-lg">
            {heading}
          </span>
          of the week
        </h1>
        <div className="wrapper overflow-hidden relative">
          <Carousel {...carouselSettings}>
            {data.map((item) => {
              return (
                <Item
                  key={item.id}
                  {...item}
                  genres={genres?.data?.genres}
                  type={heading}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    )
  );
};

export default ItemsList;
