import { HttpHeaders } from '@angular/common/http';

export class HttpClientHelper {
  static baseURL: string =
    'http://apigateway.digitalvirtualastt.org/apigateway';

  static auth_GateWay =
    'http://apigateway.digitalvirtualastt.org/auth/microservice';

  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
