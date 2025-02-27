import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';


export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialComponentsModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user-management/users/users.module').then(m => m.UsersModule)
  }]





}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  }, {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  }]
},






{
  path: '**',
  redirectTo: 'session/404'
}
];
