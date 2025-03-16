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
    cardNumber: null
  };

  constructor( public dialogRef: MatDialogRef<FormPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private demandeService: DemandeService) { }


  

  ngOnInit(): void {
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
  submitForm(): void {
    console.log('Formulaire soumis', this.data);

    this.demandeService.createCard(this.cardRequest).subscribe({
      next: (response) => {
        console.log('Carte créée avec succès:', response);
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.log('Ereeurs lors de la creation de la carte: ', error);
        
      }
    });

    this.dialogRef.close(this.data);
  }



}
