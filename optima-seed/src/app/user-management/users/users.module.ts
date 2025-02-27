import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivateUserComponent } from '../activate-user/activate-user.component';
import { AddSubsComponent } from '../add-subs/add-subs.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ListSubsComponent } from '../list-subs/list-subs.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { UpdateUsersComponent } from '../update-users/update-users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from '../users-routing/users-routing.module';
import { MatListModule } from '@angular/material/list';





@NgModule({
  declarations: [
    ListUsersComponent,
    UpdateUsersComponent,
    AddUserComponent,
    ListSubsComponent,
    ActivateUserComponent,
    AddSubsComponent
  ],
  imports: [
    MatListModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    RouterModule.forChild(UsersRoutes)
  ]
})
export class UsersModule { }
