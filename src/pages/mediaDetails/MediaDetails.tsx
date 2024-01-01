import { useParams } from "react-router-dom";
import useMediaData from "../../services/api/useMediaData";
import MediaBG from "./MediaBG";

const MediaDetails = () => {
  const { type, id } = useParams();

  const { data, isError, isLoading } = useMediaData(type!, id!);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <section className="relative h-screen flex justify-center">
        <MediaBG imgPath={data?.data?.backdrop_path} />
        <div className="info absolute top-1/2 -translate-y-1/2 flex gap-10 w-[80%] items-start">
          <div className="basis-[20%]">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.data?.poster_path}`}
              alt=""
              className="rounded w-full"
            />
          </div>
          <span className="line bg-soft w-3 h-3 my-auto rounded-full" />
          <div className="details basis-[80%]">
            <h1 className="title font-bold text-3xl">
              {data?.data?.title || data?.data?.name}
            </h1>
            <p className="overview font-thin text-gray-300 my-5">
              {data?.data?.overview}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaDetails;
