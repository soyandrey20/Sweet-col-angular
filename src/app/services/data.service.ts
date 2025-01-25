import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/v1'; // URL base del backend

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getDataForModule(moduleName: string): Observable<any[]> {
    const token = this.authService.getToken(); // Obtén el token desde AuthService

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
    });


    return this.http.get<any[]>(`${this.apiUrl}/clients`, {headers}).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
}
