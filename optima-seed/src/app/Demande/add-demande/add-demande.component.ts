import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {User} from "../../_model/user";
import {UsersService} from "../../service/users.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Demand, DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {
  users: any[] = [];
  demandForm: FormGroup

 
  constructor(private keycloak: KeycloakService, private userService: UsersService, private fb: FormBuilder, private demandService: DemandeService) { 

      this.demandForm = this.fb.group(
        {
          recepteurId: [null, Validators.required],
          email: [{value: '', disabled: true}, Validators.required],
          type: ['CREATION', Validators.required],
          message: ['', Validators.required],
          description: ['', Validators.required]
        }
      );

  }

  ngOnInit(): void {
    console.log(this.keycloak.getKeycloakInstance().profile.email);
    this.initialize();
  }

  onUserChange(userId: number): void {
      const selectedUser = this.users.find( user => user.id == userId);
      if(selectedUser){
        this.demandForm.patchValue({email: selectedUser.email});
      }
  }
  initialize() {
    const email = this.keycloak.getKeycloakInstance().profile.email
    this.userService.getUsersByEntreprise(email).subscribe(
        (data) => {
          this.users = data;
          console.log('Utilisateurs récupérés:', this.users)
        },

    (error) => {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
    )
  }


  submitForm(): void {
    if (this.demandForm.valid) {
      const demandData: any = {
        type: this.demandForm.value.type,
        message: this.demandForm.value.message,
        description: this.demandForm.value.description
      };
      const email = this.keycloak.getKeycloakInstance().profile.email;
      this.demandService.createDemand(email, demandData).subscribe(response => {
        console.log('Demande envoyée avec succès:', response);
      });
    }
  }

}
