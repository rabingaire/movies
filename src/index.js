import React from "react";
import ReactDOM from "react-dom";
import Routes from "./router";

const App = () => <Routes />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
