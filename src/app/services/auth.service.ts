import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {RegisterData} from '../models/register-data';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {
  }



  //Metodo para registrar
  register(registerData: RegisterData): Observable<any> {
    const {emailConfirm, passwordConfirm, ...payload} = registerData;


    return this.http.post(`${this.baseUrl}/register`, payload)
      .pipe(catchError(err => {
        console.error('Error en el servicio de registro:', err);
        return throwError(() => new Error('Error al registrar el usuario.'));
      }));
  }

  // Metodo para hacer login
  login(username: string, password: string): Observable<any> {
    const loginData = {username, password};
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  // Guardar el token en el LocalStorage
  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  // Obtener el token del LocalStorage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Eliminar el token al cerrar sesión
  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  // Verifica si el usuario está autenticado (tiene un token guardado)
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== ''; // Opcional: valida el token en el backend si es necesario
  }


}
