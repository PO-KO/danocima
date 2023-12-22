import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import ItemsList from "../../components/itemsList/ItemsList";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!isFetching && !error) {
    console.log(data);

    return (
      <div className="home">
        <div className="hero-container">
          <Hero data={data.results.slice(0, 5)} />
        </div>
        <div className="content-container p-3"></div>
      </div>
    );
  }
};

export default Home;
