import React from "react";
import { Router } from "@reach/router";

import App from "./components/App/";
import Home from "./components/Home/";
import Details from "./components/Details/";
import Trending from "./components/Trending/";

const Routes = () => (
  <Router>
    <App path="/">
      <Home path="/" />
      <Trending path="trending" />
      <Details path=":movieId/details" />
    </App>
  </Router>
);

export default Routes;
