import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const Auth_GateWay = 'http://localhost:50323/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authMasterMicroService(username: string, password: string): Observable<any> {
    return this.http.post(
      Auth_GateWay + 'mastermicroservice',
      {
        username,
        password,
      },
      httpOptions
    );
  }
}
