import React, { useEffect } from "react";

import { useMoviesData } from "/src/hooks/FetchMovies";

import MovieLists from "/src/shared/components/MovieLists";

import { key } from "/src/config/apiKey";
import { trendingUrl } from "/src/config/apiUrl";

import "./styles.css";

function Trending(props) {
  const [movies, fetchMovies] = useMoviesData();
  useEffect(() => {
    fetchMovies(`${trendingUrl}?api_key=${key}`, "FETCH_MOVIES");
  }, []);

  return (
    <div className="trending-wrapper">
      <MovieLists movies={movies} />
    </div>
  );
}

export default Trending;
