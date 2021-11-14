import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee/all";
const EMPLOYEE_ADD_API_BASE_URL  = "http://localhost:8080/employee/add";
const EMPLOYEE_FIND_API_BASE_URL  = "http://localhost:8080/employee/find";
const EMPLOYEE_UPDATE_API_BASE_URL  = "http://localhost:8080/employee/update";
const EMPLOYEE_DELETE_API_BASE_URL  = "http://localhost:8080/employee/delete";


class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_ADD_API_BASE_URL , employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_FIND_API_BASE_URL + '/' + employeeId)
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_UPDATE_API_BASE_URL + '/' + employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_DELETE_API_BASE_URL + '/' + employeeId)
    }
}

export default new  EmployeeService()