import { Switch, Route } from "react-router-dom";
import Edit from "./pages/Employee/edit";
import Create from "./pages/Employee/create";
import Index from "./pages/Employee/app";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employee/edit/:id" component={Edit} />
        <Route path="/employee/create" component={Create} />
        <Route path="/employee/index" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
