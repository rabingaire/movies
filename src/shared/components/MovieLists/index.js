import React from "react";
import { Link } from "@reach/router";

import "./styles.css";

const MovieLists = React.memo(({ movies }) => (
  <ul className="movie-lists-wrapper">
    {movies.map(movie => {
      return (
        <li className="movie-list" key={movie.id} tabIndex="0">
          <Link to={`/${movie.id}/details`}>{movie.original_title}</Link>
        </li>
      );
    })}
  </ul>
));

export default MovieLists;
