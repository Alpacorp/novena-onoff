import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Container from "./Containers/Container";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
