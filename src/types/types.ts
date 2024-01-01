export type ItemsListTypes = {
  data: {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    original_language: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string | number | Date | undefined;
    genre_ids: (number | string)[];
  }[];
  heading: string;
};

export type ItemType = {
  id: number;
  poster_path: string;
  title?: string;
  overview: string;
  original_language: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: any;
  genre_ids: (number | string)[];
  genres: {
    id: number;
    name: string;
  }[];
  windowWidth?: number;
  type: string;
  name?: string;
};

export type DataStatus = {
  data: {
    results: any[];
  };
  error: string;
  isFetching: boolean;
};

export type HeroType = {
  data: {
    backdrop_path: string;
    title: string;
    overview: string;
    id: number;
  }[];
};

export type DataGenresAPI = {
  id: number;
  name: string;
};
export type MyDataGenres = {
  label: string | number;
  value: string | number;
  id?: number;
};
