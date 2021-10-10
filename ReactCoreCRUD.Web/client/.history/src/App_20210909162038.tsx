import { useState, useEffect } from "react";
import {
  employeeService,
  EmployeeIndexDTO,
  EmployeeDTO,
} from "./services/EmployeeService";
import { Table } from "react-bootstrap";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState<EmployeeIndexDTO[]>([]);
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
      <Table striped hover>
        <thead>
          <th>AD SOYAD</th>
          <th>Pozisyon</th>
          <th>Yaş</th>
          <th>E-post</th>
        </thead>
        <tbody>
          {employees.map((pt, index) => {
            return (
              <tr key={index}>
                <td>{pt.firstName + pt.lastName}</td>
                <td>{pt.employeeTypeName}</td>
                <td>{pt.age}</td>
                <td>{pt.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
