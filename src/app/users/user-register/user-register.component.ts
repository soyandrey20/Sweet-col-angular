import { Component } from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-user-register',
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

}
