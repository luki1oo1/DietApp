import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private returnUrl!: string; // przechowuje URL powrotu

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authService.isLoggedIn();

    if (isAuthenticated) {
      return true;
    }

    this.authService.setReturnUrl(state.url);
    console.log('canactivate', state.url);
    this.router.navigate(['/login']);

    return false;
  }

  // Other methods

  getReturnUrl(): string {
    // Zwraca przechowywany returnUrl
    return this.returnUrl;
  }

  clearReturnUrl(): void {
    // Czyści przechowywany returnUrl
    this.returnUrl = '';
  }
}
