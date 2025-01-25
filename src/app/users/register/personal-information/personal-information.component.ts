import {Component} from '@angular/core';

import {NavbarComponent} from "../../../navbar/navbar.component";
import {UserRegistrationService} from '../../../services/users/user-registration.service';
import {Router} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';
import {PersonalData} from '../../../models/personal-data'; // Importa el Router

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [

    FormsModule,
    NavbarComponent,
    NgIf
  ],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  personalInfo: PersonalData = {
    id: '',
    name: '',
    gender: '',
    civilStatus: '',
    email: '',
    birthDate: '',
    address: '',
    phone: '',
    contracted: false
  };

  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router
  ) {
    // Cargar los datos previos de personalInfo si existen
    this.personalInfo = this.userRegistrationService.getStepData('personalInfo') || this.personalInfo;
  }

  onSubmit(registerForm: NgForm) {
    // Verificar si el formulario es válido
    if (!registerForm.valid) {
      console.log('Formulario inválido:', registerForm.controls);
      return;
    }

    // Guardar los datos de información personal
    this.userRegistrationService.setStepData('personalInfo', this.personalInfo);

    // Navegar al siguiente paso
    this.router.navigate(['/user/education-register']);
  }
}
