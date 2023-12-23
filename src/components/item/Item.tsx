import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useGetMoviesGenersQuery } from "../../services/TMDB";
type Props = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  original_language: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string | number | Date | undefined;
  lastChild?: number;
  genre_ids: (number | string)[];
};

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
  lastChild,
  id,
  genre_ids,
  first_air_date,
}: Props) => {
  const { data, error, isFetching } = useGetMoviesGenersQuery(null);

  const releaseDate = release_date
    ? new Date(release_date)
    : new Date(first_air_date);

  if (!isFetching && !error) {
    return (
      <Link to="/" className="item group/item relative">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="rounded-sm"
        />
        <div
          className={`info absolute w-[calc(100%+4px)] h-full bg-primary-dark top-0 ${
            lastChild === id
              ? "right-0 group-hover/item:right-[calc(100%)]"
              : "left-0 group-hover/item:left-[calc(100%)]"
          }  rounded-r-sm p-3 flex flex-col justify-between -z-10 group-hover/item:z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300`}
          style={{
            boxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
            WebkitBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
            MozBoxShadow: "7px 1px 59px -26px rgba(0,0,0,0.75) inset",
          }}
        >
          <div className="top flex text-[9px] items-center justify-between">
            <div className="top-left-info flex gap-1">
              <span className="year bg-[#344e41] px-1 rounded-sm shadow">
                {releaseDate.getFullYear()}
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
          <div className="bottom">
            <h1 className="title text-sm mb-3">{title}</h1>
            <p className="overview text-[10px] line-clamp-6 text-gray-300">
              {overview}
            </p>
            <div className="geners text-[8px] mt-3 flex gap-1 items-center flex-wrap">
              {genre_ids.map((genreId) =>
                data.genres.map(({ id, name }: Genres) =>
                  genreId == id ? (
                    <span className="gener bg-[#344e41] px-1 py-[1px] rounded-sm shadow">
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
