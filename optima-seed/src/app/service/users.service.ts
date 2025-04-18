import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'environments/environment';
import { User } from '../_model/user';



export interface UserApp {
  id: number;
  email: string;
  solde: number; // Assurez-vous que le backend retourne bien ce champ
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = `${env.api_host}/api/user`;
  usersUrls = `${env.admin_keycloak}/users`;
  private apiUrl = 'http://localhost:8080/api/user'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id): Observable<any> {
    return this.http.get(`${this.usersUrls}/${id}`);
  }

  addUser(user): Observable<any> {
    return this.http.post(this.usersUrl, user);
  }

  updateUserById(id, user): Observable<any> {
    return this.http.put(`${this.usersUrl}/${id}`, user);
  }

  deleteUserById(id): Observable<any> { 
    return this.http.delete(`${this.usersUrl}/${id}`);
  }

  getAllUsers(): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  getUsersByEntreprise(email): Observable<any> {

    if(!email) {
      throw new Error("L'utilisateur n'est pas authentifié ou l'email est introuvable")
    }

    const params = new HttpParams().set('email', email);

    return this.http.get<any>(`${this.apiUrl}/by-email`, {params})
  }



  getUserByEmail(email: string): Observable<UserApp> {
    return this.http.get<UserApp>(`${this.apiUrl}/email?email=${email}`);
  }
}
