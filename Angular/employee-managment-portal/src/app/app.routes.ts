import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { AddEmployee } from './components/add-employee/add-employee';

export const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeList },
    { path: 'employee-details/:id', component: EmployeeDetails },
    { path: 'add-employee', component: AddEmployee }
];
