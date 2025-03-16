import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'environments/environment';
import { User } from '../_model/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = `${env.api_host}/api/user`;
  usersUrls = `${env.admin_keycloak}/users`;
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
}
