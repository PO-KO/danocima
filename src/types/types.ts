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

export type DataStatus = {
  data: {
    results: any[];
  };
  error: string;
  isFetching: boolean;
};
