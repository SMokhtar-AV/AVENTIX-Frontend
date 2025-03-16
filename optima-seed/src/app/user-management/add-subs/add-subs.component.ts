import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'app/service/subscription.service';
import { Subscription } from 'app/_model/subscription';
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

  register = new FormGroup({
    firstName: new FormControl(),
    userName: new FormControl(),

    lastName: new FormControl(),
    
     
    phone: new FormControl(),

    email: new FormControl()

  });
//
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
  //
  sub: User = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
   
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

  ngOnInit(): void {
   this.register = this.formBuilder.group({ 
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    phone: ['', [Validators.required]],
  
    }
    
    
    );
    console.log(this.register.hasError('passwordMismatch'))
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  constructor(private service: SubscriptionService,private formBuilder: FormBuilder, public dialog: MatDialog,private router: Router, public dialogRef: MatDialogRef<AddSubsComponent> ) { }

  subscribe(): void {
    const newuser = {
      username: this.sub.userName,
      enabled: true,
      totp: false,
      emailVerified: true,
      firstName: this.sub.firstName,
      lastName: this.sub.lastName,
      email: this.sub.email,
      notBefore: 0,
     
    };

    const newsub = {
      firstName: this.sub.firstName,
      userName: this.sub.userName,
     
      email: this.sub.email,
      lastName: this.sub.lastName,
      phone : this.sub.phone,
    };
    console.log(newsub);

    this.service.addSubs(newsub).subscribe(

      response => {
        console.log(response);
        this.submitted = true;
        this.success();
      },
      error => {
        console.log(error);
       // this.fail();
       this.success();
      });

      
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

  constructor(public dialogRef: MatDialogRef <SuccessDialogComponent> ) {}
}
@Component({
  selector: 'app-fail-dialog',
  template: `
  <div class="relative">
  <h5 class="mt-1">Error!</h5>
  <p>Failed to create user.</p>
  </div>`
})
export class FailDialogComponent {
  constructor(public dialogRef: MatDialogRef <FailDialogComponent> ) {}
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (register: FormGroup) => {
    const control = register.controls[controlName];
    const matchingControl = register.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
