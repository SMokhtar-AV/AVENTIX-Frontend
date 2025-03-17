import { Component, OnInit } from '@angular/core';
import { UserApp, UsersService } from 'app/service/users.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {


  user: UserApp | null = null;
  email: string = '';

  constructor(private userService: UsersService, private keycloak: KeycloakService) { }

  ngOnInit(): void {
    this.email = this.keycloak.getKeycloakInstance().profile.email; // Récupération de l'email
    this.getUserBalance();
  }



  getUserBalance(): void {
    if (this.email) {
      this.userService.getUserByEmail(this.email).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération du solde', error);
        }
      );
    }
  }
}
