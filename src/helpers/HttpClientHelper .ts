import { HttpHeaders } from '@angular/common/http';

export class HttpClientHelper {
  static baseURL: string = 'http://localhost:50323/apigateway';
  static auth_GateWay = 'http://localhost:50323/auth/microservice';
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
