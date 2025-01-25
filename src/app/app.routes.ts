import {Routes} from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {PqrsComponent} from './pqrs/pqrs.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PoliticComponent} from './politic/politic.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './register/register.component';
import {UserInformationComponent} from './users/user-information/user-information.component';
import {PersonalInformationComponent} from './users/register/personal-information/personal-information.component';
import {EducationInformationComponent} from './users/register/education-information/education-information.component';
import {ReferencesInformationComponent} from './users/register/references-information/references-information.component';


const routeConfig: Routes = [
  {
    path: '',
    component: HomePageComponent,


  },

  {
    path: 'history',
    component: HistoryComponent,
    title: 'History'

  },


  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },

  {
    path: 'pqrs',
    component: PqrsComponent,
    title: 'Pqrs'
  },

  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About'
  },

  {
    path: 'politic',
    component: PoliticComponent,
    title: 'Politic'
  },

  {
    path: 'main',
    component: MainPageComponent, canActivate: [AuthGuard],
    title: 'Main'
  },

  {
    path: 'user',
    canActivate: [AuthGuard], // Protege todas las rutas hijas
    children: [
      {
        path: 'information',
        component: UserInformationComponent,
        title: 'User Information', // Título más específico
      },
      {
        path: 'personal-register',
        component: PersonalInformationComponent,
        title: 'Personal Register', // Título más claro
      },
      {
        path: 'education-register',
        component: EducationInformationComponent,
        canActivate: [AuthGuard],
        title: 'Education Register', // Título más claro
      },
      {
        path: 'references-register',
        component: ReferencesInformationComponent,
        canActivate: [AuthGuard],
        title: 'References Register', // Título más claro
      },
      {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full', // Redirige por defecto
      },
    ],
  },


];


export default routeConfig;
