import { Switch, Route } from "react-router-dom";
import Edit from "./pages/Employee/edit";
import Create from "./pages/Employee/create";
import Index from "./pages/Employee";
import Exception from "./pages/Exception/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employee/edit/:id" component={Edit} />
        <Route path="/employee/create" component={Create} />
        <Route path="/employee/index" component={Index} />
        <Route path="/exception/type:type" component={Exception} />
      </Switch>
    </div>
  );
}

export default App;
