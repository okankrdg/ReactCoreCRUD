import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EmployeeDTO, employeeService } from "../../services/EmployeeService";
interface RouteParams {
  id: string;
}
const Edit = () => {
  const params = useParams<RouteParams>();
  const [employee, setEmployee] = useState<EmployeeDTO>();
  useEffect(() => {
    const idParam = parseInt(params.id);
    console.log(idParam, params.id);
    employeeService
      .getById(idParam)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);
  return (
    <h4>
      asd : {params.id} {employee?.email}
    </h4>
  );
};
export default Edit;
