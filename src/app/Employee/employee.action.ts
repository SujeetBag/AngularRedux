import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { NgRedux } from "ng2-redux";
import { IAppState } from "../Store";
import { ADD_EMPLOYEE, GET_EMPLOYEE, FILTER_EMPLOYEE } from "./actiontype";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeAction {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private employeeService: EmployeeService
  ) {}

  saveEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe((data) => {
      const employee = data.json();
      this.ngRedux.dispatch({
        type: ADD_EMPLOYEE,
        employee,
      });
    });
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      const employee = data.json();
      this.ngRedux.dispatch({
        type: GET_EMPLOYEE,
        employee,
      });
    });
  }

  filterEmployees(name: string) {
    this.employeeService.filterEmployees(name).subscribe((data) => {
      const employee = data.json();
      this.ngRedux.dispatch({
        type: FILTER_EMPLOYEE,
        employee,
      });
    });
  }
}
