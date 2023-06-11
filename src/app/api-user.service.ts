import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  register(user: {}): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/auth/sign-up`, user);
  }

  login(user: {}): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/auth/sign-in`, user);
  }
}