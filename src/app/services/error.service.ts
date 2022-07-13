import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  errorMessage = {
    UNKNOWN: 'An Unknown Error is Occurred',
    MOBILE_EXISTS:
      'This Mobile number is already Exist. Please try with another mobile number.',
  };
}
