import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
