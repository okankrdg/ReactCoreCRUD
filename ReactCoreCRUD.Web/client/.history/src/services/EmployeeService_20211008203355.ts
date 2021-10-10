import axios from "axios";
import history from "../history";

export interface EmployeeDTO {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  employeeTypeId: number;
}
export interface EmployeeIndexDTO {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
  email: string;
  employeeTypeName: string;
}
export interface EmployeeType {
  id: string;
  label: string;
}
const baseUrl = `/api/employee/`;
const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

const getAll = () => {
  return http.get<EmployeeIndexDTO[]>("");
};
const getById = (id: number) => {
  console.log(id, "httpservice");
  return http.get<EmployeeDTO>(`?id=${id}`);
};
const create = (model: EmployeeDTO) => {
  return http.post("", model);
};
const update = (model: EmployeeDTO, id: number) => {
  return http.put("", { model: model, id: id });
};
const _delete = (id: number) => {
  return http.delete(`?${id}`);
};
const getEmployeeTypes = () => {
  return http.get<EmployeeIndexDTO[]>("/getEmployeeTypes");
};
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response || typeof error.response.data !== "object") {
      setTimeout(() => {}, 1000);
      return Promise.reject(error);
    }
    const { status, config, data } = error.response;
    if (config.method === "get") {
      if (status === 401) {
        history.push("/exception/type=401");
      } else if (status === 403) {
        history.push("/exception/type=403");
      } else if (status === 404) {
        history.push("/exception/type=404");
      } else if (status === 500) {
        history.push("/exception/type=500");
      }
    }
  }
);
export const employeeService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};
