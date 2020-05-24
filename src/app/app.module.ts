import { NgReduxModule, NgRedux} from 'ng2-redux';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { store, IAppState } from './Store';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeAction } from './Employee/employee.action';
import { EmployeeService } from './Employee/employee.service';
import { EmployeeListComponent } from './Employee/employee-list.component';
import { EmployeeFiltComponent } from './Employee/employee-filt.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeFiltComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    EmployeeAction,
    EmployeeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState> ) {
    ngRedux.provideStore(store);
  }
 }
