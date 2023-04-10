import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private loginService: LoginService, private router: Router) {}

  login(username: string, password: string) {
   const credentialsOk = this.loginService.checkAccount({ email: username, password: password });
if(credentialsOk) {
    localStorage.setItem('isLoggedIn', 'true');
    const returnUrl = this.getReturnUrl();
    this.setReturnUrl('');
    this.router.navigateByUrl(returnUrl);
    return true;
}
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  //

  setReturnUrl(url: string): void {
    return localStorage.setItem('returnUrl', url);
  }

  getReturnUrl(): string {
    return localStorage.getItem('returnUrl') || '/';
  }
}
