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
          employees.map(src => {
            return (<li>{}</li>)
          })
          </ul>
        }
    </div>
  );
}

export default App;
