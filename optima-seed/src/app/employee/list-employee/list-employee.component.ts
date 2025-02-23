import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'app/service/employe.service';
import { Employe } from 'app/_model/employe';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employes: Employe[];
  constructor(private store: EmployeService) { }

  ngOnInit(): void {
    const employe$ = this.store.getPets().pipe(
      map(results => {
        this.employes = results;
        }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
    employe$.subscribe(data => data);
  }


}
