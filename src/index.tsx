import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

import "antd/dist/antd.min.css";
import "./styles/index.scss";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
