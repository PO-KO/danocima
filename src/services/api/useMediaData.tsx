import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchMedia = ({ queryKey }: { queryKey: (number | string)[] }) => {
  const [, type, id] = queryKey;
  return axios.get(
    `
    https://api.themoviedb.org/3/${
      type === "movies" ? "movie" : type
    }/${id}?api_key=${tmdbApiKey}`
  );
};

const useMediaData = (type: string, id: number | string) => {
  const queryClient = useQueryClient();
  return useQuery(["genres-movies", type, id], fetchMedia, {
    initialData: () => {
      const media = queryClient
        .getQueryData([`filtred`, type])
        ?.pages.map((page: Object[]) => {
          return page?.data?.results.find((media: any) => media.id === +id);
        });
      if (media) {
        return {
          data: media[0],
        };
      } else {
        return undefined;
      }
    },
  });
};

export default useMediaData;
