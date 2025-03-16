import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/service/users.service';
import { User } from 'app/_model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddSubsComponent } from '../add-subs/add-subs.component';
import { PageEvent } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  //
//  users: any;
  //
  selectedUser: User = null;
  currentIndex = -1;
//
public showLegend = true;
public gradient = true;
public colorScheme = {
  domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
};
public showLabels = true;
public explodeSlices = false;
public doughnut = false;

length = null;
pageSize = 10;
pageEvent: PageEvent;

user: any;
users = [];

allUsers: any[] = [];

tempUsers = [];
// vars
myUsers = [];
nbUsers = 0;
//

public single = [
  {
    name: 'Clients',
    value: 0
  } 
];
//
  constructor(private userservice: UsersService ,  private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) { 
      Object.assign(this, {single : this.single});

    }
  //
  ngOnInit(): void {
    this.readUsers();
  }
  //
  /* readUsers(): void {
    this.userservice.getUsers().subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => {
        console.log(error);
    });
  } */
  //
  readUsers(): void {
    
    this.userservice.getUsers().subscribe(
      users => {
        this.users = users;
        this.length = this.users.length;
        for (this.user of users) {
          this.allUsers.push(this.user)
        }
        this.tempUsers = [...this.allUsers];


        console.log('emchi', this.allUsers)
      }, error => {
        console.log(error);
      });
  }
//
filterClients(event) {
  const val = event.target.value.toLowerCase();
  console.log('val', val)
  // filter our data
  const tempC = this.tempUsers.filter(function (d) {
    console.log('hiiiiii', d)
    return d.userName.toString().toLowerCase().indexOf(val) !== -1 || !val;
  });
  console.log('tmp', tempC)
  // update the rows
  this.allUsers = tempC;
}

tabClick(event: MatTabChangeEvent) {
  const tab = event.tab.textLabel;
  if (tab === 'Tab 1') {
    this.readUsers();
  }
   
}

  refresh(): void {
    this.readUsers();
    this.selectedUser = null;
    this.currentIndex = -1;
  }
  //
  selectUser(user: User, index: number): void {
    this.selectedUser = user;
    this.currentIndex = index;
  }

  open(): void {
    const dialogRef = this.dialog.open(AddSubsComponent, {
      width: '750px',
      maxHeight: '90vh'
    })
  }


  edit(id): void {
    const dialogRef = this.dialog.open(AddSubsComponent, {
      width: '750px',
      data: id
    })
  }




}
