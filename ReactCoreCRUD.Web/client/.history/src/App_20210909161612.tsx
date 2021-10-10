import {useState,useEffect} from 'react';
import {employeeService,EmployeeIndexDTO,EmployeeDTO} from './services/EmployeeService';
import {Table} from 'react-bootstrap'
import './App.css';

function App() {
  const [employees,setEmployees] = useState<EmployeeIndexDTO[]>([]);
  useEffect(() => {
  employeeService.getAll()
      .then(response => {
        console.log(response.data);
        setEmployees(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  },[])
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
        {employees.map((pt,index) => {
          return (
          <tr>
          <td key={index}>
           {pt.firstName + pt.lastName} 
            Age {pt.age}  Pozisyon   Email {}
            
          </td>
          <td>
          {pt.employeeTypeName}
          </td>
          <td>
          {pt.age}
          </td>
          <td>
          {pt.email}
          </td>
        </tr>
        )
        </tbody>
        </Table>
        <h4>Hello</h4>
        {
      <ul>
      {employees.map((pt,index) => {
        return (
          <li key={index}>
            FullName :{pt.firstName + pt.lastName} 
            Age {pt.age}  Pozisyon {pt.employeeTypeName}  Email {pt.email}
            <hr />
          </li>
          
        );
      })}
    </ul>
        }
    </div>
  );
}

export default App;
