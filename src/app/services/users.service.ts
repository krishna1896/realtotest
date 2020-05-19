import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "https://realto-task-api.herokuapp.com/"
  constructor(private htc: HttpClient) { }

  // Adding User //
  addUser(us: users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.htc.post(this.url + 'users', JSON.stringify(us), httpOptions)
  }

  // Login //
  login(us: users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.htc.post(this.url + 'users/login', JSON.stringify(us), httpOptions)
  }

  // Get Users //
  getUsers(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.htc.get(this.url + 'users',{params: {page: "1", per_page: "10"} , headers: headers})
  }
}
