import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

interface EmployeeDTO{
  firstName:string,
  lastName:string,
  email:string,
  age:number,
  employeeTypeName:string
}
function App() {
  const [employees,setEmployees] = useState<EmployeeDTO[]>([]);
  useEffect(() => {
axios.get("/api/employee").then((response) => {
  setEmployees(response.data);
})
  },[])
  return (
    <div className="App">
        <h4>Hello</h4>
        {
      <ul>
      {employees.map((pt,index) => {
        return (
          <li key={index}>
            FullName :{pt.firstName + pt.lastName} 
            <hr></hr> Age {pt.age} <hr></hr>  Pozisyon {pt.employeeTypeName}  <hr></hr> Email {pt.email}
          </li>
        );
      })}
    </ul>
        }
    </div>
  );
}

export default App;
