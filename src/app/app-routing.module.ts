import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from 'src/components/employee-form/employee-form.component';
import { EmployeeTableComponent } from 'src/components/employee-table/employee-table.component';
import { EmployeeEditComponent } from 'src/components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: 'form', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeeTableComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'edit/:index', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
