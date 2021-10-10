import { useParams } from "react-router-dom";
import { EmployeeDTO, employeeService } from "../../services/EmployeeService";
import { useEffect, useState } from "react";
const CreateOrEdit = () => {
  interface RouteParams {
    id: string;
  }
  const params = useParams<RouteParams>();
  const [employee, setEmployee] = useState<EmployeeDTO>();
  useEffect(() => {
    const idParam = parseInt(params.id);
    console.log(idParam, params.id);
    if (idParam) {
      employeeService
        .getById(idParam)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [params.id]);
  return (
    <div className="employeeForm">
      <div className="row">
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};
export default CreateOrEdit;
