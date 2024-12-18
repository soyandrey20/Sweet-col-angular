import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {RegisterData} from '../models/register-data';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterData = {
    id: '',
    name: '',
    username: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  private validateForm(): boolean {
    if (this.registerData.password !== this.registerData.passwordConfirm) {
      alert('Las contraseñas no coinciden.');
      return false;
    }
    if (this.registerData.email !== this.registerData.emailConfirm) {
      alert('Los correos electrónicos no coinciden.');
      return false;
    }
    return true;
  }

  register(): void {
    if (!this.validateForm()) return;

    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/main']);
      },
      error: (err) => {
        console.error('Error en el registro:', err);
        alert('Error al registrarse');
      }
    });
  }
}
