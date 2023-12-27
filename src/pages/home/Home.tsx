import ItemsList from "../../components/itemsList/ItemsList";
import Hero from "../../components/hero/Hero";
import useTrendingMoviesData from "../../services/api/useTrendingMoviesData";
import useTrendingShowsData from "../../services/api/useTrendingShowsData";

const Home = () => {
  // Get Trending movies from TMDB Api
  const {
    data: dataMovies,
    isLoading: isLoadingMovies,
    isError: isMoviesError,
  } = useTrendingMoviesData(1, "week");

  // Get Trending TV shows from TMDB Api
  const {
    data: dataShows,
    isLoading: isLoadingShows,
    isError: isShowsError,
  } = useTrendingShowsData(1, "week");

  // Rendering content
  let content;

  if (!isLoadingMovies && !isLoadingShows && !isMoviesError && !isShowsError) {
    content = (
      <>
        <section className="hero-container">
          <Hero data={dataMovies?.data?.results?.slice(0, 5)} />
        </section>
        <section className="content-container px-1">
          <ItemsList data={dataMovies?.data?.results} heading={"Movies"} />
          <ItemsList data={dataShows?.data?.results} heading={"Shows"} />
        </section>
      </>
    );
  }

  if (isLoadingMovies || isLoadingShows) {
    content = <p>Loading...</p>;
  }

  if (isMoviesError || isShowsError) {
    content = <p>Something went wrong!</p>;
  }

  return <div className="home">{content}</div>;
};

export default Home;
