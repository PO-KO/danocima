import { useGetMoviesQuery, useGetTvQuery } from "../../services/TMDB";
import ItemsList from "../../components/itemsList/ItemsList";
import Hero from "../../components/hero/Hero";
import { DataStatus } from "../../types/types";

const Home = () => {
  // Get popular movies from TMDB Api

  const {
    data: dataMovies,
    error: errorMovies,
    isFetching: isFetchingMovies,
  } = useGetMoviesQuery<DataStatus>(null);

  // Get popular TV shows from TMDB Api

  const {
    data: dataTv,
    error: errorTv,
    isFetching: isFetchingTv,
  } = useGetTvQuery<DataStatus>(null);

  // Rendering content
  let content;

  if (!isFetchingMovies && !isFetchingTv && !errorMovies && !errorTv) {
    console.log("Hello");

    content = (
      <>
        <section className="hero-container">
          <Hero data={dataMovies.results.slice(0, 5)} />
        </section>
        <section className="content-container px-1">
          <ItemsList data={dataMovies.results} heading={"Movies"} />
          <ItemsList data={dataTv.results} heading={"TV Shows"} />
        </section>
      </>
    );
  }

  if (isFetchingMovies || isFetchingTv) {
    content = <p>Loading...</p>;
  }

  if (errorMovies || errorTv) {
    content = <p>Something went wrong!</p>;
  }

  return <div className="home">{content}</div>;
};

export default Home;
