import { Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LicenceTableComponent } from './licence-table/licence-table.component';

export const routes: Routes = [
  { path: '', component: EmployeeTableComponent },
  { path: 'create', component: EmployeeFormComponent },
  {path: 'licences', component:LicenceTableComponent}
];
