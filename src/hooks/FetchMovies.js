import { useState, useReducer, useEffect } from "react";

import "abortcontroller-polyfill/dist/polyfill-patch-fetch";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    case "SEARCH_MOVIES":
      return action.payload;
    default:
      return state;
  }
}

function useMoviesData() {
  const [controller] = useState(new window.AbortController());
  const [movies, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);

  function fetchMovies(url, type) {
    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(data => {
        dispatch({ type, payload: data.results });
      })
      .catch(error => {
        if (error.name === "AbortError") return;
        throw error;
      });
  }
  return [movies, fetchMovies];
}

export { useMoviesData };
