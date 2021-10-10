import { useState, useEffect } from "react";
import {
  employeeService,
  EmployeeIndexDTO,
} from "../../services/EmployeeService";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Index() {
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
      <Button variant="danger" onClick={() => history.push("/employee/create")}>
        Create
      </Button>
      <Table striped hover>
        <thead>
          <tr>
            <th>AD SOYAD</th>
            <th>Pozisyon</th>
            <th>Yaş</th>
            <th>E-post</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((pt, index) => {
            return (
              <tr key={index}>
                <td>{pt.firstName + pt.lastName}</td>
                <td>{pt.employeeTypeName}</td>
                <td>{pt.age}</td>
                <td>{pt.email}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => history.push("/employee/edit/" + pt.id)}
                  >
                    Güncelle
                  </Button>
                  <Button variant="danger">Sil</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Index;
