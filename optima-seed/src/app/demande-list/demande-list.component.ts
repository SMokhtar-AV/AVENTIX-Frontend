import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormPopupComponent } from 'app/form-popup/form-popup.component';
import { Demand, DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  displayedColumns: string[] = ['type', 'message', 'description', 'date', 'action'];
  demands: MatTableDataSource<Demand> = new MatTableDataSource<Demand>([]);

  constructor(private demandService: DemandeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.demandService.getDemands().subscribe((data) => {
      data.sort((a, b) => {
        if (a.etat === 'NON_VALIDE' && b.etat !== 'NON_VALIDE') return -1;
        if (a.etat !== 'NON_VALIDE' && b.etat === 'NON_VALIDE') return 1;
        return (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0);
      });
    console.log(data);
    
      this.demands.data = data;
    });
  }

  openPopup(demand: Demand): void {
    this.dialog.open(FormPopupComponent, {
      width: '400px',
      data: { demandeId: demand.id } // Passer seulement l'ID de la demande
    });
  }
}
