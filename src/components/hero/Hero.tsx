type Props = {
  data: {
    backdrop_path: string;
    title: string;
    overview: string;
  }[];
};

const Hero = ({ data }: Props) => {
  const random = Math.floor(Math.random() * data.length);

  return (
    <div className="hero relative max-h-[80vh] overflow-hidden">
      <div className="picture">
        <img
          src={`https://image.tmdb.org/t/p/original${data[random].backdrop_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="overlay absolute w-full h-full top-0 left-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(23,24,26,1) 10%, rgba(23,24,26,0) 100%)",
        }}
      ></div>
      <div className="info absolute top-1/2 md:top-2/3 mt-3 md:mt-5 left-6 w-1/2 md:w-1/3">
        <h1 className="title text-lg w-full leading-tight mb-1 sm:text-2xl md:text-4xl lg:text-5xl font-bold md:mb-4 line-clamp-2 transition-all">
          {data[random].title}
        </h1>
        <p className="overview overflow-hidden text-[8px] line-clamp-2 md:text-sm md:line-clamp-2 lg:line-clamp-3 text-gray-300 w-full leading-relaxed">
          {data[random].overview}
        </p>
      </div>
    </div>
  );
};

export default Hero;
