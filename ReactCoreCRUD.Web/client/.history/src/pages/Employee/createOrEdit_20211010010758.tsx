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

  const [employee, setEmployee] = useState<Partial<EmployeeDTO>>({
    firstName: "",
    lastName: "",
    birthDate: new Date().toISOString().substring(0, 10),
    email: "",
    employeeTypeId: undefined,
  });
  const [employeeTypes, setEmployeeTypes] = useState<Partial<EmployeeType>[]>(
    []
  );
  useEffect(() => {
    const idParam = parseInt(params.id);
    employeeService
      .getEmployeeTypes()
      .then((response) => {
        setEmployeeTypes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    if (idParam) {
      employeeService
        .getById(idParam)
        .then((response) => {
          setEmployee(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [params.id]);
  const submitForm = () => {};
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
        <input
          type="date"
          className="form-control"
          id="birthDate"
          value={employee?.birthDate?.substring(0, 10)}
          onChange={(e) =>
            setEmployee({
              ...employee,
              birthDate: e.currentTarget.value,
            })
          }
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Pozisyon</label>
        <select
          id="inputState"
          className="form-select"
          value={employee?.employeeTypeId}
          onChange={(e) =>
            setEmployee({
              ...employee,
              employeeTypeId: parseInt(e.target.value),
            })
          }
        >
          <option value="">Choose...</option>
          {employeeTypes.map((et) => (
            <option key={et.id} value={et.id}>
              {et.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 pt-1">
        <button type="submit" onClick={submitForm} className="btn btn-primary">
          Kaydet
        </button>
      </div>
    </div>
  );
};
export default CreateOrEdit;
