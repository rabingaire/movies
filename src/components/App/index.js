import React from "react";

import Header from "/src/shared/components/Header/";

import "./styles.css";

const App = props => (
  <div className="wrapper">
    <Header />
    {props.children}
  </div>
);

export default App;
