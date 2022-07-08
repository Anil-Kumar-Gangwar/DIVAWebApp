import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from '../models/auth-request.model';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authRequest = new AuthRequest('admin', 'admin@321');
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  errorMessage = '';

  ngOnInit(): void {
    // this.SaveToken();
  }

  SaveToken(): void {
    this.authService.authService(this.authRequest).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.token);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
    // this.authService.authMicroService('admin', 'admin@321').subscribe({
    //   next: (data) => {
    //     this.tokenStorage.saveToken(data.token);
    //     //this.reloadPage();
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.error.message;
    //   },
    // });
  }

  GetToken(): any {
    this.authService.authMicroService('admin', 'admin@321').subscribe({
      next: (data) => {
        return data.token;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
  reloadPage(): void {
    //this.router.navigate(['facilitator']);
    window.location.reload();
  }
}
