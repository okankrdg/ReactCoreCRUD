import { useParams } from "react-router-dom";
import useEffect, { useState } from "react";
import { EmployeeDTO, employeeService } from "../../services/EmployeeService";
interface RouteParams {
  id: string;
}
const Edit = () => {
  const params = useParams<RouteParams>();
  const [employee,setEmployee] = useState<EmployeeDTO>()
  useEffect(() => {
    const idParam = (Number)params.id;
    employeeService
      .getById(id)
      .then((response) => {
        employee(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <h4>asd : {params.id}</h4>;
};
export default Edit;
