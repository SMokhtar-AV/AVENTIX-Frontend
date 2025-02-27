import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/service/users.service';
import { User } from 'app/_model/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  //
  users: any;
  //
  selectedUser: User = null;
  currentIndex = -1;

  constructor(private userservice: UsersService ) { }
  //
  ngOnInit(): void {
    this.readUsers();
  }
  //
  readUsers(): void {
    this.userservice.getUsers().subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => {
        console.log(error);
    });
  }
  //
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
}
