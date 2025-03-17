import { Routes } from '@angular/router';
import { ListUsersComponent } from '../list-users/list-users.component';
import { AuthGuard } from 'app/auth.guard';
import { UpdateUsersComponent } from '../update-users/update-users.component';
 
import { AddSubsComponent } from '../add-subs/add-subs.component';

export const UsersRoutes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'all', component: ListUsersComponent },
  { path: 'user/:id', component: UpdateUsersComponent, canActivate: [AuthGuard], data: { roles: ['Admin']} },
  { path: 'add', component: AddSubsComponent },
 // { path: 'users', component: ListUsersComponent },
  { path: 'subscribe', component: AddSubsComponent },
];
 