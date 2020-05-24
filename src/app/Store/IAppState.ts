import { Employee } from '../Employee/employee';

export interface IAppState{
    employee: Employee[];
    mysearch: Employee[];
}

export class AppState implements IAppState {
    employee: Employee[];
    mysearch: Employee[];
}