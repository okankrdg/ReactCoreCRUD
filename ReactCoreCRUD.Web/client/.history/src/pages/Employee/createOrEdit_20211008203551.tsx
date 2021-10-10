import { useParams } from "react-router-dom";
import {
  EmployeeType,
  EmployeeDTO,
  employeeService,
} from "../../services/EmployeeService";
import { useEffect, useState } from "react";
const CreateOrEdit = () => {
  interface RouteParams {
    id: string;
  }

  const params = useParams<RouteParams>();
  const [employee, setEmployee] = useState<Partial<EmployeeDTO>>();
  const [employeeTypes, setEmployeeTypes] = useState<Partial<EmployeeType>[]>([]);
  useEffect(() => {
    const idParam = parseInt(params.id);
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
    <div className="employeeForm col-md-8">
      <div className="col-md-6">
        <label className="form-label">Ad</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={employee?.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Soyad</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={employee?.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">E-posta</label>
        <input
          type="email"
          className="form-control"
          id="email"
          required
          value={employee?.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
      </div>
      <div className="col-6">
        <label className="form-label">Doğum Tarihi</label>
        <input type="text" className="form-control" id="birthDate" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Pozisyon</label>
        <select
          id="inputState"
          className="form-select"
          value={employee?.employeeTypeId}
        >
          {employeeTypes.map(et => return)}
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-12 pt-1">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
};
export default CreateOrEdit;
