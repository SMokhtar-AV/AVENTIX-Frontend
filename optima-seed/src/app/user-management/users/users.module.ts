import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
 import { AddSubsComponent } from '../add-subs/add-subs.component';
 
import { ListUsersComponent } from '../list-users/list-users.component';
import { UpdateUsersComponent } from '../update-users/update-users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from '../users-routing/users-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [
    ListUsersComponent,
    UpdateUsersComponent,
  
    AddSubsComponent
  ],
  imports: [
    MatListModule,
    MatPaginatorModule,
    FlexModule,
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
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatTabsModule,
    RouterModule.forChild(UsersRoutes),
    MatFormFieldModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxChartsModule,
  ]
})
export class UsersModule { }
