import axios from "axios";
import { useQuery } from "react-query";
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchGenresMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`
  );
};

const useGenresMoviesData = () => {
  return useQuery(["genres-movies"], fetchGenresMovies);
};

export default useGenresMoviesData;
