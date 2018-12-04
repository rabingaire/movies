import React, { useState } from "react";

import { useMoviesData } from "../../hooks/FetchMovies";

import MovieLists from "../../shared/components/MovieLists";

import { key } from "../../config/apiKey";
import { searchUrl } from "../../config/apiUrl";

import "./styles.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, fetchMovies] = useMoviesData();

  function getMovies(searchString) {
    fetchMovies(
      `${searchUrl}?api_key=${key}&query=${searchString}`,
      "SEARCH_MOVIES"
    );
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (searchQuery) {
      getMovies(searchQuery);
    }
    setSearchQuery("");
  }

  function onFormValueChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="home-wrapper">
      <form onSubmit={onFormSubmit}>
        <input
          className="form-search"
          type="text"
          placeholder="Search Movies"
          onChange={onFormValueChange}
          value={searchQuery}
          tabIndex="0"
        />
        <input
          className="btn-search"
          type="submit"
          value="Search"
          tabIndex="0"
        />
      </form>
      <MovieLists movies={movies} />
    </div>
  );
}

export default Home;
