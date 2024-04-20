import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Position } from 'src/models/position.enum';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;
  currentEmployeeIndex!: number;
  positions = Object.values(Position);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: [''],
      age: [''],
      position: [''],
      isFullTime: [false],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentEmployeeIndex = +params['index'];
      this.loadEmployeeData(this.currentEmployeeIndex);
    });
  }

  loadEmployeeData(index: number): void {
    const employee = this.employeeService.getEmployees()[index];
    if (employee) {
      this.employeeForm.patchValue(employee);
    } else {
      this.router.navigate(['/employees']);
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(
        this.currentEmployeeIndex,
        this.employeeForm.value
      );
      this.router.navigate(['/employees']);
    }
  }
  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
