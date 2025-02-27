import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'environments/environment';
import { Subscription } from '../_model/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subsUrl = `${env.api_host}/subscription`;

  constructor(private http: HttpClient) { }

  getSubs(): Observable<any> {
    return this.http.get<Subscription[]>(`${this.subsUrl}/all`);
  }

  getSubsById(id): Observable<any> {
    return this.http.get(`${this.subsUrl}/${id}`);
  }

  getSubsByType(type): Observable<any> {
    return this.http.get(`${this.subsUrl}/${type}`);
  }

  addSubs(sub): Observable<any> {
    return this.http.post(`${this.subsUrl}/subscribe`, sub);
  }
}
