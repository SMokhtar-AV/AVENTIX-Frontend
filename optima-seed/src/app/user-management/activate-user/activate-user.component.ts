import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from 'app/service/subscription.service';
import { UsersService } from 'app/service/users.service';
import { User } from 'app/_model/user';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {

  selectedSub = null;
  message = '';

  submitted = false;
  //
  phone = 0;
  password = '';
  company = '';
  //
  users: any;
  //
  selectedUser: User = null;
  currentIndex = -1;
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

  constructor( private userservice: UsersService,
               private service: SubscriptionService,
               private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.message = '';
    this.viewSub(this.route.snapshot.paramMap.get('id'));
  }

  viewSub(id): void {
    this.service.getSubsById(id).subscribe(
      sub => {
        this.selectedSub = sub;
        console.log(sub);
      },
      error => {
        console.log(error);
      });
  }

  activateUser(): void {
    const phone = this.phone;
    const password = this.password;
    const company = this.selectedSub.company;
    const newuser = {
      username: this.selectedSub.username,
      enabled: true,
      totp: false,
      emailVerified: true,
      firstName: this.selectedSub.firstName,
      lastName: this.selectedSub.lastName,
      email: this.selectedSub.email,
      notBefore: 0,
      groups: [this.selectedSub.type],
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

}
