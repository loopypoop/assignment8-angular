import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`http://localhost:4200/users`);
  }

  getGroups(): Observable<any> {
    return this.http.get(`http://localhost:4200/groups`);
  }
}
