import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'app/service/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  selectedUser = null;
  message = '';

  constructor( private userservice: UsersService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.message = '';
    this.viewUser(this.route.snapshot.paramMap.get('id'));
  }

  viewUser(id): void {
    this.userservice.getUserById(id).subscribe(
      user => {
        this.selectedUser = user;
        console.log(user)
      },
      error => {
        console.log(error);
      });
  }

  updateUser(): void {
    this.userservice.updateUserById(this.selectedUser.id, this.selectedUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(): void {
    this.userservice.deleteUserById(this.selectedUser.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/users/all']);
      },
      error => {
        console.log(error);
      });
  }

}
