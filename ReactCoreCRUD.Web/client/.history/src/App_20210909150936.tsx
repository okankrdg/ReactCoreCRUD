import {useState,useEffect} from 'react';
import axios from 'axios';
import  from './services/EmployeeService.ts'
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
