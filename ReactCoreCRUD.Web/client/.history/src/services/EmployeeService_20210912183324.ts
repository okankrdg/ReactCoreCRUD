import axios from "axios";
import useHistory from "react-router-dom";

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
const baseUrl = `/api/employee`;
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
  return http.get<EmployeeIndexDTO>(`?${id}`);
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
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status, config, data } = error.response;
    const history = useHistory();
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

    if (data.errors.length > 0) {
      return Promise.reject(data.errors);
    }
  }
);
export const employeeService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
  history: useHistory(),
};
