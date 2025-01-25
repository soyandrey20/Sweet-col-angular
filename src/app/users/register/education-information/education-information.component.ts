import {Component} from '@angular/core';

import {NavbarComponent} from "../../../navbar/navbar.component";
import {UserRegistrationService} from '../../../services/users/user-registration.service';
import {Router} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';
import {EducationData} from '../../../models/education-data';

@Component({
  selector: 'app-education-information',
  imports: [

    NavbarComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './education-information.component.html',
  styleUrl: './education-information.component.css'
})
export class EducationInformationComponent {
  educationInfo: EducationData = {
    titulosObtenidos: '',
    nivelEducacion: '',
    areasEstudio: '',
    empresasAnteriores: '',
    cargosDesempenados: '',
    funciones: '',
    tiempoServicio: '',
    logros: ''

  };

  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router,

  ) {
    // Cargar los datos previos de educationInfo si existen
    this.educationInfo = this.userRegistrationService.getStepData('educationInfo') || this.educationInfo;

  }

  onSubmit(registerForm: NgForm) {
    // Verificar si el formulario es válido
    if (!registerForm.valid) {
      console.log('Formulario inválido:', registerForm.controls);
      return;
    }

    // Guardar los datos de educación
    this.userRegistrationService.setStepData('educationInfo', this.educationInfo);

    // Navegar al siguiente paso
    this.router.navigate(['/user/references-register']);
  }
}
