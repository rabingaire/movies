import React, { useReducer, useEffect } from "react";

import { key } from "../../config/apiKey";
import { movieDetailUrl } from "../../config/apiUrl";

import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import "./styles.css";

const AbortController = window.AbortController;

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_MOVIE_DETAIL":
      return action.payload;
    default:
      return state;
  }
}

function Details(props) {
  const [movieDetail, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const url = movieDetailUrl.replace(":movieId", props.movieId);
    fetch(`${url}?api_key=${key}`, { signal })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "FETCH_MOVIE_DETAIL", payload: data });
      })
      .catch(error => {
        if (error.name === "AbortError") return;
        throw error;
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="movie-detail-wrapper">
      {movieDetail.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.original_title}
        />
      )}
    </div>
  );
}

export default Details;
