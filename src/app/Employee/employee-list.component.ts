import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Employee } from './employee';
import { EmployeeAction } from './employee.action';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls : ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
  @select('employee') filteredEmployees$: Observable<Employee>;

  constructor(
    private _employeeAction: EmployeeAction
  ) {}

  fetch() {
    this._employeeAction.fetchEmployees();
  }
  ngOnInit() {
    this.fetch();
  }
}
