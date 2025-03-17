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


export interface AppNotification {
  id: number;
  message: string;
  date: string;
  isRead: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class DemandeService {

  private apiPayment = 'http://localhost:8080/payment/process';

  private apiUrl = 'http://localhost:8080/api/demand';

  private apiCard = 'http://localhost:8080/api/card/create';

  private apiNotif ='http://localhost:8080/api/notifications'

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


    getNotifications(email: string): Observable<AppNotification[]> {
      return this.http.get<AppNotification[]>(`${this.apiNotif}/user/${email}`);
    }

    markAsRead(notificationId: number): Observable<void> {
      return this.http.put<void>(`${this.apiNotif}/${notificationId}/markAsRead`, {});
    }


    markAllAsRead(email: string): Observable<void> {
      return this.http.put<void>('http://localhost:8080/api/notifications/read-all', email);
    }

    processPayment(paymentRequest: any): Observable<string> {
      return this.http.post<string>(this.apiPayment, paymentRequest);
    }
  
}
