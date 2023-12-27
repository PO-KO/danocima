import axios from "axios";
import { useQuery } from "react-query";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchTrendingShows = ({
  queryKey,
}: {
  queryKey: (number | string)[];
}) => {
  const page = queryKey[1];
  const time = queryKey[2];
  return axios.get(
    `https://api.themoviedb.org/3/trending/tv/${time}?page=${page}&api_key=${tmdbApiKey}`
  );
};

const useTrendingShowsData = (page: number, time: string) => {
  return useQuery(["trending-shows", page, time], fetchTrendingShows);
};

export default useTrendingShowsData;
