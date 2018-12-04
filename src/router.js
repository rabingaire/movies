import React from "react";
import { Router } from "@reach/router";

import App from "/src/components/App/";
import Home from "/src/components/Home/";
import Details from "/src/components/Details/";
import Trending from "/src/components/Trending/";

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
