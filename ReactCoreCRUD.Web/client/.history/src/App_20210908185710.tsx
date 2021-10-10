import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [employee,setEmployee] = useState([]);
  useEffect(() => {
axios.get("/api/employee").then((response) => {
console.log(response);
setEmployee(response.data);
})
  })
  return (
    <div className="App">
        <h4>Hello</h4>
    </div>
  );
}

export default App;
