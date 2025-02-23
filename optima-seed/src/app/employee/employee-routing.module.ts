import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

export const EmployeeRoutes: Routes = [{
  path: '',
  redirectTo: 'view',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'view',
    component: ListEmployeeComponent
  }, {
    path: 'add',
    component: AddEmployeeComponent
  }]
}];



