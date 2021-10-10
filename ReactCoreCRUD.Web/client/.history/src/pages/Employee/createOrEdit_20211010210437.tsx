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
  interface EmployeeValidationState {
    firstName: boolean;
    lastName: boolean;
    birthDate: boolean;
    email: boolean;
    employeeTypeId: boolean;
  }
  const params = useParams<RouteParams>();

  const [employee, setEmployee] = useState<EmployeeDTO>({
    firstName: "",
    lastName: "",
    birthDate: new Date().toISOString().substring(0, 10),
    email: "",
    employeeTypeId: undefined,
  });
  const [employeeTypes, setEmployeeTypes] = useState<EmployeeType[]>([]);
  const [employeeValidation, setEmployeeValidation] =
    useState<EmployeeValidationState>({
      firstName: false,
      lastName: false,
      birthDate: false,
      email: false,
      employeeTypeId: false,
    });
  const setValid = () => {
    var validationState = employeeValidation;

    if (
      employee.firstName === "" ||
      employee.firstName == null ||
      employee.firstName?.length < 2
    ) {
      validationState.firstName = false;
    } else {
      validationState.firstName = true;
    }
    if (employee.lastName === "" || employee.lastName == null) {
      validationState.lastName = false;
    } else {
      validationState.lastName = true;
    }
    if (
      employee.email === "" ||
      employee.email == null ||
      /\S+@\S+\.\S+/.test(employee.email)
    ) {
      validationState.email = false;
    } else {
      validationState.email = true;
    }
    if (
      employee.employeeTypeId === undefined ||
      employee.employeeTypeId == null
    ) {
      validationState.employeeTypeId = false;
    } else {
      validationState.employeeTypeId = true;
    }
    setEmployeeValidation(validationState);
  };
  const isValidForm = () => {
    return (
      employeeValidation.firstName &&
      employeeValidation.lastName &&
      employee.email &&
      employee.employeeTypeId
    );
  };
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
  const submitForm = () => {
    const idParam = parseInt(params.id);
    if (!idParam) {
      employeeService
        .create(employee)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      employeeService.update(employee, idParam).then((response) => {
        console.log(response);
      });
    }
  };
  return (
    <div className="employeeForm col-md-8">
      <div className="col-md-6">
        <label className="form-label">Ad</label>
        <input
          type="text"
          className={`form-control ${
            employeeValidation.firstName ? "is-valid" : "is-invalid"
          }`}
          id="name"
          required
          value={employee?.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        />
        {employeeValidation.firstName ? (
          ""
        ) : (
          <div className="invalid-feedback">
            En az iki karakter girmelisiniz
          </div>
        )}
      </div>
      <div className="col-md-6">
        <label className="form-label">Soyad</label>
        <input
          type="text"
          className={`form-control ${
            employeeValidation.lastName ? "is-valid" : "is-invalid"
          }`}
          id="name"
          value={employee?.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        />
        {employeeValidation.lastName ? (
          ""
        ) : (
          <div className="invalid-feedback">Soyad boş bırakılamaz</div>
        )}
      </div>
      <div className="col-md-6">
        <label className="form-label">E-posta</label>
        <input
          type="email"
          className="form-control"
          placeholder="user@example.com"
          id="email"
          required
          value={employee?.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
        {employeeValidation.email ? (
          ""
        ) : (
          <div className="invalid-feedback">
            E-posta alanı boş ya da doğru biçimde değil
          </div>
        )}
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
