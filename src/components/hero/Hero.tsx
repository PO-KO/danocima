import { Link } from "react-router-dom";
import { HeroType } from "../../types/types";
import Carousel from "nuka-carousel";
const Hero = ({ data }: HeroType) => {
  let content = data.map(({ backdrop_path, title, overview, id }) => (
    <section key={id} className="hero relative max-h-[80vh] overflow-hidden">
      <div className="picture">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
          className="w-full"
        />
      </div>
      <div
        className="overlay absolute w-full h-full top-0 left-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(23,24,26,1) 10%, rgba(23,24,26,0) 100%)",
        }}
      ></div>
      <div className="info absolute top-1/2 md:top-2/3 mt-3 md:mt-5 left-6 w-1/2 md:w-[55%]">
        <h1 className="title text-lg w-full leading-tight mb-1 sm:text-2xl md:text-4xl lg:text-5xl font-bold md:mb-4 line-clamp-2 transition-all">
          {title}
        </h1>
        <div className="flex gap-5">
          <p className="overview overflow-hidden text-[8px] line-clamp-2 md:text-sm md:line-clamp-2 lg:line-clamp-2 text-gray-300 font-thin leading-relaxed ">
            {overview}
          </p>

          <Link
            to={"/movie/:id"}
            className="self-end bg-soft text-primary-dark text-center basis-1/5 flex-grow flex-shrink-0 py-1 rounded-full hover:underline hover:bg-gray-200 transition text-[6px] md:text-sm lg:text-lg "
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  ));

  return (
    <Carousel
      withoutControls={true}
      wrapAround={true}
      autoplay={true}
      autoplayInterval={7000}
    >
      {content}
    </Carousel>
  );
};

export default Hero;
