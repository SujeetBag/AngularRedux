import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Employee } from './employee';
import { EmployeeAction } from './employee.action';

@Component({   templateUrl: './employee.component.html',
  styleUrls : ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private employee: Employee = new Employee();
  constructor(
    private _employeeAction: EmployeeAction
  ) {}

  save() {
    let employee = this.employee;
    this._employeeAction.saveEmployee(employee);
  }
  ngOnInit() {
  }
}
