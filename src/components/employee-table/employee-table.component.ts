import { Component, OnInit } from '@angular/core';
import { EmployeeNetland } from '../../models/employee-netland.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Position } from 'src/models/position.enum';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit {
  employees: EmployeeNetland[] = [];
  editedEmployee: EmployeeNetland | null = null;
  positions = Object.values(Position);

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    const index = this.route.snapshot.params['index'];
  }

  onEdit(index: number): void {
    this.router.navigate(['/edit', index]);
  }

  onDelete(index: number): void {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(index);
      this.employees.splice(index, 1);
    }
  }
  onAdd(): void {
    this.router.navigate(['/form']);
  }
  startEdit(employee: EmployeeNetland): void {
    this.editedEmployee = { ...employee };
  }

  confirmEdit(employee: EmployeeNetland): void {
    const index = this.employees.findIndex(
      (emp) => emp.id === this.editedEmployee?.id
    );
    if (index > -1 && this.editedEmployee) {
      this.employees[index] = { ...this.editedEmployee };
      this.editedEmployee = null;
    }
  }

  cancelEdit(): void {
    this.editedEmployee = null;
  }
  startEditField(employee: EmployeeNetland, field: string): void {
    if (!employee.isEditing) {
      employee.isEditing = {};
    }
    employee.isEditing[field] = true;
  }

  stopEditField(employee: EmployeeNetland, field: string): void {
    if (employee.isEditing && employee.isEditing[field]) {
      employee.isEditing[field] = false;
    }
  }
}
