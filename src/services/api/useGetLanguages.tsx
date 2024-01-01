import { useQuery } from "react-query";
import axios from "axios";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const fetchLanguages = () => {
  return axios.get(
    `https://api.themoviedb.org/3/configuration/languages?api_key=${tmdbApiKey}`
  );
};

type Lang = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

const useGetLanguages = () => {
  return useQuery("languages", fetchLanguages, {
    select: (data) => {
      const language = data.data.map((lang: Lang) => {
        return {
          label: lang.english_name,
          value: lang.iso_639_1,
        };
      });
      return language;
    },
  });
};

export default useGetLanguages;
