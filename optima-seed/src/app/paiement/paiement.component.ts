import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'app/service/demande.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {


  paymentRequest = {
    email: '',
    qantite: null,
    montant: null
  };


  constructor(private keycloak: KeycloakService, private demandeService: DemandeService) { }

  ngOnInit(): void {

    this.paymentRequest.email = this.keycloak.getKeycloakInstance().profile.email;
  }


  submitPayment() {
    this.demandeService.processPayment(this.paymentRequest).subscribe({
      next: (response) => alert('Paiement réussi ! Numéro de série : ' + response),
      error: (error) => alert('Erreur de paiement : ' + error.error)
    });
  }

}
