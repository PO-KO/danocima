import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useGetMoviesGenersQuery } from "../../services/TMDB";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ItemType } from "../../types/types";

// Genres type

type Genres = {
  id: number | string;
  name: string;
};

const Item = ({
  poster_path,
  title,
  vote_average,
  release_date,
  original_language,
  overview,
  // lastChild,
  // firstChild,
  id,
  genre_ids,
  first_air_date,
}: // setShowRightArrow,
// setShowLeftArrow,
ItemType) => {
  // fetching items data (Movies or TV)
  const { data, error, isFetching } = useGetMoviesGenersQuery(null);
  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });

  // Handel slider indecators
  // useEffect(() => {
  //   if (lastChild === id && inView) {
  //     setShowRightArrow(false);
  //   } else {
  //     setShowRightArrow(true);
  //   }

  //   if (firstChild === id) {
  //     if (inView) {
  //       setShowLeftArrow(false);
  //     } else {
  //       setShowLeftArrow(true);
  //     }
  //   }
  // }, [inView, ref, lastChild, firstChild]);

  const releaseDate = release_date // Get the released year
    ? new Date(release_date).getFullYear()
    : new Date(first_air_date).getFullYear();

  if (!isFetching && !error) {
    return (
      <Link
        to="/"
        className={`item group/item relative basis-[70px] sm:basis-[100px] md:basis-[130px] lg:basis-[176px] shrink-0 grow-0`}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="rounded-sm h-full"
          // ref={ref}
        />
        <div
          className={`max-lg:hidden info absolute w-[calc(100%+4px)] h-full bg-primary-dark top-full left-0 group-hover/item:top-0 rounded-r-sm p-3 flex flex-col justify-between -z-10 group-hover/item:z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300`}
          style={{
            boxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
            WebkitBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
            MozBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
          }}
        >
          <div className="top flex text-[9px] items-center justify-between">
            <div className="top-left-info flex gap-1">
              <span className="year bg-[#344e41] px-1 rounded-sm shadow">
                {releaseDate}
              </span>
              <span className="lang uppercase bg-[#344e41] px-1 rounded-sm shadow">
                {original_language}
              </span>
            </div>
            <div className="rate flex gap-[2px]">
              {vote_average.toFixed(1)}
              <StarIcon
                sx={{
                  fontSize: "12px",
                  color: "#ffd60a",
                }}
              />
            </div>
          </div>
          <div className="middle poster max-w-12">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
              className="rounded-sm h-full"
            />
          </div>
          <div className="bottom">
            <h1 className="title text-xs mb-3 font-bold">{title}</h1>
            <p className="overview text-[10px] line-clamp-4 text-gray-300">
              {overview}
            </p>
            <div className="geners text-[8px] mt-3 flex gap-1 items-center flex-wrap">
              {genre_ids.map((genreId) =>
                data.genres.map(({ id, name }: Genres) =>
                  genreId == id ? (
                    <span
                      key={id}
                      className="gener bg-[#344e41] px-1 py-[1px] rounded-sm shadow"
                    >
                      {name}
                    </span>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Item;
