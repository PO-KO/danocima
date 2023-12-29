import axios from "axios";
import { useQuery } from "react-query";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchFiltredData = (type, page, rating, date, genre) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/${type}?page=${page}&vote_average.gte=${rating}&first_air_date_year=${date}&with_genres=${genre}&sort_by=popularity.desc&api_key=${tmdbApiKey}`
  );
};

const useFilterData = (
  type: string,
  page: number,
  rating: number | string,
  date: number | string = "",
  genre: string = ""
) => {
  console.log([type, page, rating, date, genre]);

  return useQuery([`filtred`, type], () =>
    fetchFiltredData(type, page, rating, date, genre)
  );
};

export default useFilterData;
