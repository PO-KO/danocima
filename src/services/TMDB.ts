import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

const page = 1;
const timeWindow = "day";

type Content = {
  data: Object;
};
export const tmdbApi = createApi({
  reducerPath: "tmdbapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // Get Popular Movies
    getMovies: builder.query<Content, any>({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
    // Get Movies Gneres
    getMoviesGeners: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Popular TV Shows
    getTv: builder.query<Content, any>({
      query: () => `tv/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
    // Get Trending Movies
    getTrendingMovies: builder.query({
      query: () => `trending/movie/${timeWindow}?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesGenersQuery,
  useGetTvQuery,
  useGetTrendingMoviesQuery,
} = tmdbApi;
