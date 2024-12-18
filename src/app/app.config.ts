import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import routeConfig from './app.routes';
import {AuthInterceptor} from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}), // Mejora el rendimiento
    provideRouter(routeConfig),                            // Provee las rutas definidas
    provideHttpClient(),                                   // Habilita las solicitudes HTTP
    {
      provide: HTTP_INTERCEPTORS,                          // Registrar el interceptor
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
