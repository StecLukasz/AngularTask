import { Injectable } from '@angular/core';
import { EmployeeNetland } from '../models/employee-netland.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: EmployeeNetland[] = [];

  getEmployees(): EmployeeNetland[] {
    return this.employees;
  }

  addEmployee(employee: EmployeeNetland): void {
    this.employees.push(employee);
  }

  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }

  updateEmployee(index: number, employee: EmployeeNetland): void {
    this.employees[index] = employee;
  }
}
