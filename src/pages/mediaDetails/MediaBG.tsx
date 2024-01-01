const MediaBG = ({ imgPath }: { imgPath: string }) => {
  return (
    <section
      className="h-full relative w-full blur-sm"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${imgPath}')`,
        backgroundSize: "cover",
      }}
    >
      <span
        className="w-full h-full absolute top-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,24,26,0.8) 15%, rgba(23,24,26,1) 73%)",
        }}
      ></span>
    </section>
  );
};

export default MediaBG;
