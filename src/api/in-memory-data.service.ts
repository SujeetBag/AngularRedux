import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "src/app/Employee/employee";

export class InMemoryDataService implements InMemoryDbService {
  // uncomment this function to force an error
  // protected get(interceptorArgs: HttpMethodInterceptorArgs) {
  //   let resp = createErrorResponse(500, 'this is a forced error from the in-memory api');
  //   return createObservableResponse(resp);
  // }

  /**
   * Creates fresh copy of data each time.
   * Safe for consuming service to morph arrays and objects.
   */
  employees = [
    {
      id: 1,
      name: "Raju Kumar",
      department: "Finance",
    },
    {
      id: 2,
      name: "Alka Agnihitri",
      department: "HR",
    },
    {
      id: 3,
      name: "Raman Lamba",
      department: "Admin",
    },
  ];

  createDb() {
    return {
      getAllEmployee: this.employees,
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((employee) => employee.id)) + 1
      : 11;
  }
}
