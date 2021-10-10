import { Switch, Route } from "react-router-dom";
import Edit from "./pages/Employee/edit";
import CreateOrEdit from "./pages/Employee/createOrEdit";
import Index from "./pages/Employee";
import Exception from "./pages/Exception/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employee/edit/:id" component={CreateOrEdit} />
        <Route path="/employee/create" component={CreateOrEdit} />
        <Route path="/employee/index" component={Index} />
        <Route path="/exception/type=:type" component={Exception} />
      </Switch>
    </div>
  );
}

export default App;
