import axios from "axios";
import { useQuery } from "react-query";
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchGenresShows = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${tmdbApiKey}`
  );
};

const useGenresShowsData = () => {
  return useQuery(["genres-shows"], fetchGenresShows);
};

export default useGenresShowsData;
