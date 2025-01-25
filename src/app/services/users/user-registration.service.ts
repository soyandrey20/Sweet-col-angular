import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, forkJoin, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  private stepData: any = {}; // Almacena los datos de los pasos del formulario
  private baseUrl = 'http://localhost:8080/api/v1'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {
  }

  setStepData(step: string, data: any) {
    this.stepData[step] = data;
  }

  getStepData(step: string) {
    return this.stepData[step] || {};
  }

  getAllData() {
    return this.stepData;
  }

  submitPersonalInfo(): Observable<any> {
    const payload = {...this.stepData['personalInfo']};


    return this.http.post(`${this.baseUrl}/clients`, payload)
      .pipe(
        catchError(err => {
          console.error('Error al enviar información personal:', err);
          return throwError(() => new Error('No se pudo enviar la información personal.'));
        })
      );
  }

  submitEducationInfo(userId: string): Observable<any> {
    const payload = {...this.stepData['educationInfo'], user_id: userId};


    return this.http.post(`${this.baseUrl}/education`, payload)
      .pipe(
        catchError(err => {
          console.error('Error al enviar información de educación:', err);
          return throwError(() => new Error('No se pudo enviar la información de educación.'));
        })
      );
  }

  submitReferencesInfo(userId: string): Observable<any> {
    const payload = {...this.stepData['referencesInfo'], user_id: userId};


    return this.http.post(`${this.baseUrl}/references`, payload)
      .pipe(
        catchError(err => {
          console.error('Error al enviar referencias:', err);
          return throwError(() => new Error('No se pudieron enviar las referencias.'));
        })
      );
  }

  submitAllData(userId: string): Observable<any> {
    return forkJoin([
      this.submitPersonalInfo(),
      this.submitEducationInfo(userId),
      this.submitReferencesInfo(userId)
    ]).pipe(
      catchError(err => {
        console.error('Error al enviar todos los datos:', err);
        return throwError(() => new Error('No se pudieron enviar todos los datos.'));
      })
    );
  }

}
