import { Routes } from '@angular/router';
import { ListUsersComponent } from '../list-users/list-users.component';
import { AuthGuard } from 'app/auth.guard';
import { UpdateUsersComponent } from '../update-users/update-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ListSubsComponent } from '../list-subs/list-subs.component';
import { ActivateUserComponent } from '../activate-user/activate-user.component';
import { AddSubsComponent } from '../add-subs/add-subs.component';

export const UsersRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'all', component: ListUsersComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'user/:id', component: UpdateUsersComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'add', component: AddUserComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'pending', component: ListSubsComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'pending/:id', component: ActivateUserComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'subscribe', component: AddSubsComponent },
];
