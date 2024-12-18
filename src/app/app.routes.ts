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
  }


];


export default routeConfig;
