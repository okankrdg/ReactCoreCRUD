import { useState, useEffect } from "react";
import { employeeService, EmployeeIndexDTO } from "./services/EmployeeService";
import { Table, Button } from "react-bootstrap";
import { useHistory, Switch, Route } from "react-router-dom";
import Edit from "./pages/Employee/edit";
import Create from "./pages/Employee/create";
import A from "./pages/Employee/app";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState<EmployeeIndexDTO[]>([]);
  const history = useHistory();
  useEffect(() => {
    employeeService
      .getAll()
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/employee/edit/:id" component={Edit} />
        <Route path="/employee/create" component={Create} />
        <Route path="/employee/index" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
