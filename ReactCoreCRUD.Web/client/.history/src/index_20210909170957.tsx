import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Edit from "./pages/Employee/edit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./dist/bootstrap/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="employee/edit/:id" component={Edit} />
        <Route path="employee/create"></Route>
      </Switch>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
