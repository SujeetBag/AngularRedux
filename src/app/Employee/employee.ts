export interface IEmployee
{
    id: number;
    name: string;
    department: string;
}

export class Employee implements IEmployee
{
    id: number;
    name: string;
    department: string;
}