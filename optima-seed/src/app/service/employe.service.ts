import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
 
import { Employe } from '../_model/employe';

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class EmployeService {
  constructor(private http: HttpClient) { }

  getPets(): Observable<Employe[]> {
    const uri = `${env.api_host}/api/employe/all`;
    return this.http.get<Employe[]>(uri);
  }
  public saveResource(resource: Employe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Employe>(env.api_host + '/api/employe/create', resource, httpOptions);
  }

}