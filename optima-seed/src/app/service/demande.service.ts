import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




export interface Demand {
  id: number;
  type: 'CREATION' | 'SUPPRESSION';
  message: string;
  description: string;
  date: string | null;
  etat: string;
}

@Injectable({
  providedIn: 'root'
})


export class DemandeService {

  private apiUrl = 'http://localhost:8080/api/demand';

  private apiCard = 'http://localhost:8080/api/card/create';

  constructor(private http: HttpClient) { }


  

    createDemand(email: any, demand: Demand): Observable<Demand> {

      const params = new HttpParams().set('email', email);

      return this.http.post<Demand>(`${this.apiUrl}/add`, demand, {params});
    }

    getDemands(): Observable<Demand[]> {
      return this.http.get<Demand[]>(this.apiUrl);
    }

    createCard(cardData: any): Observable<any> {
      return this.http.post<any>(this.apiCard, cardData);
    }



  
}
