import axios from "axios";
import { useQuery } from "react-query";
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchGenresShows = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${tmdbApiKey}`
  );
};

console.log("fafa".toLowerCase());

type Genres = {
  name: string;
  id: number;
};

const useGenresShowsData = () => {
  return useQuery(["genres-shows"], fetchGenresShows);
};

export default useGenresShowsData;
