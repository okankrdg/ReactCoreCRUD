import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./dist/bootstrap/bootstrap.min.css";
import from ""

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
