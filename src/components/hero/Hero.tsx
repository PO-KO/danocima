import React, { useEffect, useState } from "react";

interface Props {
  data: Object[];
}

const Hero = ({ data }: Props) => {
  const random = Math.floor(Math.random() * data.length);

  return (
    <div className="hero relative max-h-[80vh] overflow-hidden">
      <div className="picture">
        <img
          src={`https://image.tmdb.org/t/p/original${data[random].backdrop_path}`}
          alt=""
          className="object-cover"
        />
      </div>
      <div
        className="overlay absolute w-full h-full top-0 left-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(23,24,26,1) 19%, rgba(23,24,26,0) 100%)",
        }}
      ></div>
      <div className="info absolute top-2/3 mt-5 left-6 h-36">
        <h1 className="title text-5xl font-bold mb-4 line-clamp-2 w-1/3">
          {data[random].title}
        </h1>
        <p className="overview overflow-hidden line-clamp-3 text-sm text-gray-300 w-5/12 leading-relaxed">
          {data[random].overview}
        </p>
      </div>
    </div>
  );
};

export default Hero;
