import axios from "axios";
import { useInfiniteQuery } from "react-query";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchFiltredData = (
  type: string,
  page: number,
  rating: number,
  date: number | string,
  genre: string,
  lang: string
) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/${type}?page=${page}&vote_average.gte=${rating}&${
      type === "tv" ? "first_air_date_year" : "primary_release_year"
    }=${date || ""}&with_genres=${genre || ""}${
      lang && `&with_original_language=${lang}`
    }&sort_by=popularity.desc&api_key=${tmdbApiKey}`
  );
};

const useFilterData = (
  type: string,
  rating: number,
  date: number | string,
  genre: string,
  lang: string
) => {
  return useInfiniteQuery(
    [`filtred`, type],
    ({ pageParam = 1 }) =>
      fetchFiltredData(type, pageParam, rating, date, genre, lang),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < lastPage.data.total_pages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );
};

export default useFilterData;
