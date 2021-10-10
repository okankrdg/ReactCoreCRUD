import {useState,useEffect} from 'react';
import {employeeService} from './services/EmployeeService';
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
  employeeService.getAll()
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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
