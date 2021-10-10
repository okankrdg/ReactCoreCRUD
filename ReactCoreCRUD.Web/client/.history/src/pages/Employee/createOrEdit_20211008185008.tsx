import { useParams } from "react-router-dom";
import { EmployeeDTO, employeeService } from "../../services/EmployeeService";
import { useEffect, useState } from "react";
const CreateOrEdit = () => {
  interface RouteParams {
    id: string;
  }
  const params = useParams<RouteParams>();
  const [employee, setEmployee] = useState<EmployeeDTO>();
  return <div>Create or Edit</div>;
};
export default CreateOrEdit;