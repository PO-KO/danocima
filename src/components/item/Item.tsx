import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { ItemType } from "../../types/types";

const Item = ({
  poster_path,
  title,
  vote_average,
  release_date,
  original_language,
  overview,
  genre_ids,
  first_air_date,
  genres,
  type,
  name,
}: ItemType) => {
  // fetching items data (Movies or TV)

  const releaseDate = release_date // Get the released year
    ? new Date(release_date).getFullYear()
    : new Date(first_air_date).getFullYear();

  return (
    <Link
      to={`/${type.toLowerCase()}/:id`}
      className={`item group/item relative overflow-hidden flex-1 bg-primary-dark`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        className="rounded-sm w-full h-full object-cover"
      />
      <div
        className={`max-lg:hidden info absolute w-[calc(100%+4px)] h-full bg-primary-dark top-full left-0 group-hover/item:top-0 rounded-r-sm p-3 flex flex-col justify-between -z-10 group-hover/item:z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300`}
        style={{
          boxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
          WebkitBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
          MozBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
        }}
      >
        <div className="top flex text-[9px] clamp items-center justify-between">
          <div className="top-left-info flex gap-1">
            {!Number.isNaN(releaseDate) && (
              <span className="year bg-[#344e41] px-1 rounded-sm shadow">
                {releaseDate}
              </span>
            )}
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
        <div className="middle poster max-h-[40%] my-2">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title || name}
            className="rounded-sm h-full"
          />
        </div>
        <div className="bottom">
          <h1 className="title text-xs mb-3 font-bold line-clamp-1">
            {title || name}
          </h1>
          <p className="overview text-[9px] line-clamp-3 text-gray-300">
            {overview}
          </p>
          <div className="geners text-[8px] mt-3 flex gap-1 items-center overflow-hidden">
            {genre_ids.slice(0, 3).map((genreId) =>
              genres.map(({ id, name }) =>
                genreId == id ? (
                  <span
                    key={id}
                    className="genre bg-[#344e41] px-1 py-[1px] rounded-sm shadow text-nowrap"
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
};

export default Item;
