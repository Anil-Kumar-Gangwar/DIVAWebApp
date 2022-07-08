import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/auth-request.model';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper ';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authMicroService(username: string, password: string): Observable<any> {
    return this.http.post(
      HttpClientHelper.auth_GateWay,
      {
        username,
        password,
      },
      HttpClientHelper.httpOptions
    );
  }

  authService(authRequest: AuthRequest): Observable<any> {
    return this.http.post(
      HttpClientHelper.auth_GateWay,
      authRequest,
      HttpClientHelper.httpOptions
    );
  }
}
