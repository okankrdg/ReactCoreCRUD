import { useParams, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [employee, setEmployee] = useState<EmployeeDTO>({
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    email: "",
    employeeTypeId: undefined,
  });
  const [employeeTypes, setEmployeeTypes] = useState<EmployeeType[]>([]);
  const [employeeValidation, setEmployeeValidation] =
    useState<EmployeeValidationState>({
      firstName: true,
      lastName: true,
      birthDate: true,
      email: true,
      employeeTypeId: true,
    });

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
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [params.id]);
  const setValid = () => {
    if (
      employee.firstName === "" ||
      employee.firstName == null ||
      employee.firstName?.length < 2
    ) {
      employeeValidation.firstName = false;
    } else {
      employeeValidation.firstName = true;
    }
    if (
      employee.lastName === "" ||
      employee.lastName == null ||
      employee.lastName?.length < 2
    ) {
      employeeValidation.lastName = false;
    } else {
      employeeValidation.lastName = true;
    }
    if (
      employee.email === "" ||
      employee.email == null ||
      !/\S+@\S+\.\S+/.test(employee.email)
    ) {
      employeeValidation.email = false;
    } else {
      employeeValidation.email = true;
    }
    if (
      employee.employeeTypeId === undefined ||
      employee.employeeTypeId == null
    ) {
      employeeValidation.employeeTypeId = false;
    } else {
      employeeValidation.employeeTypeId = true;
    }
    setEmployeeValidation({ ...employeeValidation });
    return employeeValidation;
  };
  const isValidForm = (model: EmployeeValidationState) => {
    return (
      model.firstName && model.lastName && model.email && model.employeeTypeId
    );
  };
  const submitForm = () => {
    const idParam = parseInt(params.id);
    var model = setValid();
    if (isValidForm(model)) {
      if (!idParam) {
        employeeService
          .create(employee)
          .then((response) => {
            history.push("/employee/index");
          })
          .catch((error) => {
            console.log(error.response);
          });
      } else {
        employeeService
          .update(employee, idParam)
          .then((response) => {
            history.push("/employee/index");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  useEffect(() => {
    console.log(employee.birthDate);
  }, [employee.birthDate]);
  return (
    <div className="card col-md-8">
      <div className="card-header text-start">Ekleme/Güncelleme</div>
      <div className="card-body">
        <div className="text-start">
          <div className="col-md-6">
            <label className="form-label">Ad*</label>
            <input
              type="text"
              className={`form-control ${
                employeeValidation.firstName ? "" : "is-invalid"
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
            <label className="form-label">Soyad*</label>
            <input
              type="text"
              className={`form-control ${
                employeeValidation.lastName ? "" : "is-invalid"
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
              <div className="invalid-feedback">
                En az iki karakter girmelisiniz
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label">E-posta*</label>
            <input
              type="email"
              className={`form-control ${
                employeeValidation.email ? "" : "is-invalid"
              }`}
              placeholder="user@example.com"
              id="email"
              required
              value={employee?.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
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
              value={new Date(employee.birthDate?.toString())
                .toISOString()
                .substring(0, 10)}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  birthDate:
                    e.currentTarget.value == ""
                      ? null
                      : new Date(e.currentTarget.value),
                })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Pozisyon*</label>
            <select
              id="inputState"
              className={`form-control ${
                employeeValidation.employeeTypeId ? "" : "is-invalid"
              }`}
              value={employee?.employeeTypeId}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  employeeTypeId: parseInt(e.target.value),
                })
              }
            >
              <option value="">Seçiniz...</option>
              {employeeTypes.map((et) => (
                <option key={et.id} value={et.id}>
                  {et.name}
                </option>
              ))}
            </select>
            {employeeValidation.employeeTypeId ? (
              ""
            ) : (
              <div className="invalid-feedback">
                Lütfen pozisyon tipi seçiniz
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card-footer text-start">
        <div className="col-12">
          <button
            type="submit"
            onClick={submitForm}
            className="btn btn-primary me-1"
          >
            Kaydet
          </button>
          <a href="/employee/index" className="btn btn-secondary">
            Çıkış
          </a>
        </div>
      </div>
    </div>
  );
};
export default CreateOrEdit;
