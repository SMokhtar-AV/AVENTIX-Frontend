import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.css']
})
export class FormPopupComponent implements OnInit {

  cardRequest = {
    email: '',
    cardNumber: null,
    demandeId: null // Ajouter l'ID de la demande
  };

  constructor(
    public dialogRef: MatDialogRef<FormPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private demandeService: DemandeService
  ) { }

  ngOnInit(): void { 
    if (this.data?.demandeId) {
      console.log(this.data.demandeId);
      
      this.cardRequest.demandeId = this.data.demandeId; // Récupérer l'ID de la demande
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (!this.cardRequest.email || !this.cardRequest.cardNumber) {
      return;
    }

    console.log('Formulaire soumis', this.cardRequest);
    console.log(this.cardRequest);
    
    this.demandeService.createCard(this.cardRequest).subscribe({
      next: (response) => {
        console.log('Carte créée avec succès:', response);
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Erreurs lors de la création de la carte:', error);
      }
    });
  }
}
