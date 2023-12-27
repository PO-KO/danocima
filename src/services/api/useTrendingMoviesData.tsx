import axios from "axios";
import { useQuery } from "react-query";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchPopularMovies = ({
  queryKey,
}: {
  queryKey: (number | string)[];
}) => {
  const page = queryKey[1];
  const time = queryKey[2];
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/${time}?page=${page}&api_key=${tmdbApiKey}`
  );
};

const useTrendingMoviesData = (page: number, time: string) => {
  return useQuery(["popular-movies", page, time], fetchPopularMovies);
};

export default useTrendingMoviesData;
