import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormPopupComponent } from 'app/form-popup/form-popup.component';
import { Demand, DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  demands: Demand[] = [];
  constructor(private demandService: DemandeService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.demandService.getDemands().subscribe((data) => {
      this.demands = data.sort((a, b) => {
        if (a.etat === 'NON_VALIDE' && b.etat !== 'NON_VALIDE') return -1;
        if (a.etat !== 'NON_VALIDE' && b.etat === 'NON_VALIDE') return 1;
        return (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0);
      });
      
    });

    console.log(this.demands);

   
  } 



  openPopup(demand: Demand): void {
    this.dialog.open(FormPopupComponent, {
      width: '400px',
      data: demand // Passer les données si nécessaire
    });
  
  
}

}