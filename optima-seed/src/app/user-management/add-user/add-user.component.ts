import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/service/users.service';
import { User } from 'app/_model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //
  submitted = false;
  //
  phone = 0;
  password = '';
  company = '';
  //
  user: User = {
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  enabled: true,
  totp: false,
  emailVerified: false,
  disableableCredentialTypes: [],
  requiredActions: [],
  notBefore: 0,
  groups: [],
  credentials: [{ type: '', value: '', temporary: false }],
  attributes: [new Map<'', ''>()]
  };
  //
  constructor(private userservice: UsersService ) { }
  createUser(): void {
    const phone = this.phone;
    const password = this.password;
    const company = this.company;
    const newuser = {
      username: this.user.username,
      enabled: true,
      totp: false,
      emailVerified: true,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      notBefore: 0,
      groups: [this.user.groups],
      credentials: [{
        type: 'password',
        value: password,
        temporary: false,
      }],
      attributes: {Phone : phone, Company : company}
    };
    console.log(newuser);
    this.userservice.addUser(newuser).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

}
