import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {CommonModule} from '@angular/common'; // Importa esto

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = '';
  password = '';


  constructor(private authService: AuthService, private router: Router) {
  }

  // Método para iniciar sesión
  login(): void {
    this.authService.login(this.userName, this.password).subscribe({
      next: (response) => {

        this.authService.saveToken(response.token); // Guardar el token en LocalStorage
        this.router.navigate(['/main']); // Redirigir al home después del login
      },
      error: (err) => {
        console.error('Error en el login:', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }


}
