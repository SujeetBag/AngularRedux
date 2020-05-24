import { Employee, IEmployee } from "./employee";
import { Injectable } from "@angular/core";
import { CONFIG } from "../shared";
import { Http, RequestOptions } from "@angular/http";
import { HttpParams } from "@angular/common/http";

const addemployeeUrl = CONFIG.baseUrls.addemployee;
const getemployeeUrl = CONFIG.baseUrls.getemployee;
const filteremployeeUrl = CONFIG.baseUrls.filteremployee;

@Injectable()
export class EmployeeService {
  constructor(private _http: Http) {}

  addEmployee(employee: Employee) {
    return this._http.post(`${addemployeeUrl}`, employee);
  }

  getEmployees() {
    return this._http.get(`${getemployeeUrl}`);
  }

  filterEmployees(name: string) {
    return this._http.get(`${filteremployeeUrl}`, {
      params: { name: name },
    });
  }
}
