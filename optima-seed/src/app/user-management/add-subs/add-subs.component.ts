import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubscriptionService } from 'app/service/subscription.service';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'app/_model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subs',
  templateUrl: './add-subs.component.html',
  styleUrls: ['./add-subs.component.css']
})
export class AddSubsComponent implements OnInit {

  @Output() userAdded = new EventEmitter<void>(); // Event emitter to notify parent component

  register: FormGroup; // Form group for the registration form

  config: MatDialogConfig = {
    disableClose: false,
    width: '20%',
    height: '20%',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };

  sub: User = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    roleUser: '',
    phone: '',
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

  submitted = false;

  constructor(
    private service: SubscriptionService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<AddSubsComponent>
  ) { }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required]],
      roleUser: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  subscribe(): void {
    const newsub = {
      firstName: this.sub.firstName,
      userName: this.sub.userName,
      roleUser: this.sub.roleUser,
      lastName: this.sub.lastName,
      phone: this.sub.phone,
      email: this.sub.email
    };
    console.log(newsub);

    this.service.addSubs(newsub).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.userAdded.emit(); // Notify parent component that a user was added
       
      },
      error => {
        console.log(error);
        this.fail();
      });
  }

  goToUsersList() {
    this.router.navigate(['users/all']);
  }

  success() {
    this.dialog.open(SuccessDialogComponent, this.config);
  }

  fail() {
    this.dialog.open(FailDialogComponent, this.config);
  }
}

@Component({
  selector: 'app-success-dialog',
  template: `
    <div class="relative">
      <h5 class="mt-1">User created!</h5>
    </div>
  `
})
export class SuccessDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>) {}
}

@Component({
  selector: 'app-fail-dialog',
  template: `
    <div class="relative">
      <h5 class="mt-1">Error!</h5>
      <p>Failed to create user.</p>
    </div>
  `
})
export class FailDialogComponent {
  constructor(public dialogRef: MatDialogRef<FailDialogComponent>) {}
}