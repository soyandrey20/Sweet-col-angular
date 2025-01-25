import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRegistrationService } from '../services/users/user-registration.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userRegistrationService: UserRegistrationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.authService.getToken();

    if (!token) {
      // Si no hay token, redirige al login
      this.router.navigate(['/login']);
      return false;
    }

    // Verifica el flujo del registro si es necesario
    const path = route.routeConfig?.path;

    if (path === 'education-register' && !this.userRegistrationService.getStepData('personalInfo')) {
      this.router.navigate(['/user/personal-register']);
      return false;
    }

    if (path === 'references-register' && !this.userRegistrationService.getStepData('educationInfo')) {
      this.router.navigate(['/user/education-register']);
      return false;
    }

    // Si pasa todas las validaciones, permite el acceso
    return true;
  }
}
