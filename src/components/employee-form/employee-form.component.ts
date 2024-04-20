import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Position } from '../../models/position.enum';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/typings';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  positions = Object.values(Position);

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      isFullTime: [false],
      position: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value);
      this.router.navigate(['/employees']);
    }
  }
  onCancel(): void{
    this.router.navigate(['/employees']);
  }
}
