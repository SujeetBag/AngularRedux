import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Employee } from './employee';
import { EmployeeAction } from './employee.action';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-employee-filt',
  templateUrl: './employee-filt.component.html',
  styleUrls : ['./employee.component.css']
})
export class EmployeeFiltComponent implements OnInit {
  @select('mysearch') filteredEmployees$: Observable<Employee>;
  private empname = '';
  constructor(
    private _employeeAction: EmployeeAction
  ) {}

  filterChanged(name: string) {
    this._employeeAction.filterEmployees(name);
  }
  fetch() {
    this._employeeAction.fetchEmployees();
  }
  ngOnInit() {
    this.fetch();
  }
}
