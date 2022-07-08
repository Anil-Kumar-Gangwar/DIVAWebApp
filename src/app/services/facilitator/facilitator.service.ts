import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper ';
import { Facilitator } from '../../models/facilitator.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitatorService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Facilitator[]> {
    return this.http.get<Facilitator[]>(
      `${HttpClientHelper.baseURL}/facilitator`,
      HttpClientHelper.httpOptions
    );
  }
}
