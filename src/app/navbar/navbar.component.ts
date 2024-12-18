import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoPath = 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg';

  constructor(public authService: AuthService) {
  }

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout();
  }
}
