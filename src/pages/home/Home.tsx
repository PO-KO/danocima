import { useGetMoviesQuery, useGetTvQuery } from "../../services/TMDB";
import ItemsList from "../../components/itemsList/ItemsList";
import Hero from "../../components/hero/Hero";

type Status = {
  data: {
    results: any[];
  };
  error: string;
  isFetching: boolean;
};

const Home = () => {
  const {
    data: dataMovies,
    error: errorMovies,
    isFetching: isFetchingMovies,
  } = useGetMoviesQuery<Status>(null);

  const {
    data: dataTv,
    error: errorTv,
    isFetching: isFectchingTv,
  } = useGetTvQuery<Status>(null);

  return (
    <div className="home">
      <div className="hero-container">
        {!isFetchingMovies && !errorMovies && (
          <Hero data={dataMovies.results.slice(0, 5)} />
        )}
        {errorMovies && <div>{errorMovies}</div>}
        {isFetchingMovies && <div>Loading...</div>}
      </div>
      <div className="content-container p-3">
        {!isFetchingMovies && !errorMovies && (
          <ItemsList data={dataMovies.results} heading={"Movies"} />
        )}
        {isFetchingMovies && <div>Loading...</div>}
        {errorMovies && <div>{errorMovies}</div>}

        {!isFectchingTv && !errorTv && (
          <ItemsList data={dataTv.results} heading={"TV Shows"} />
        )}
        {isFectchingTv && <div>Loading...</div>}
        {errorTv && <div>{errorTv}</div>}
      </div>
    </div>
  );
};

export default Home;
