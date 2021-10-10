import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router, BrowserRouter } from "react-router-dom";
import "./dist/bootstrap/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);