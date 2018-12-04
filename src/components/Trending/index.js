import React, { useEffect } from "react";

import { useMoviesData } from "../../hooks/FetchMovies";

import MovieLists from "../../shared/components/MovieLists";

import { key } from "../../config/apiKey";
import { trendingUrl } from "../../config/apiUrl";

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
