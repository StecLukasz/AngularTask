import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './../components/employee-table/employee-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeFormComponent } from 'src/components/employee-form/employee-form.component';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEditComponent } from 'src/components/employee-edit/employee-edit.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    EmployeeEditComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
