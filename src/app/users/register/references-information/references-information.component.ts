import {Component} from '@angular/core';
import {FooterComponent} from "../../../footer/footer.component";
import {NavbarComponent} from "../../../navbar/navbar.component";
import {UserRegistrationService} from '../../../services/users/user-registration.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ReferencesData} from '../../../models/references-data';


@Component({
  selector: 'app-references-information',
  imports: [

    NavbarComponent,
    FormsModule,
    NgForOf,
    NgIf,

  ],
  templateUrl: './references-information.component.html',
  styleUrl: './references-information.component.css'
})
export class ReferencesInformationComponent {
  ratings = [1, 2, 3, 4, 5];  // Array de valores para los botones de radio
  selectedRatingC: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingL: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingT: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingR: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingP: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingTE: number | undefined;  // Variable que guardará el valor seleccionado
  selectedRatingCO: number | undefined;  // Variable que guardará el valor seleccionado


  referencesInfo: ReferencesData = {

    selectedRatingL: '',
    selectedRatingT: '',
    selectedRatingC: '',
    selectedRatingR: '',
    selectedRatingP: '',
    selectedRatingTE: '',
    selectedRatingCO: '',
    nombreReferencia: '',
    cargo: '',
    empresa: '',
    telefonosContacto: ''


  };

  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router
  ) {
    this.referencesInfo = this.userRegistrationService.getStepData('referencesInfo') || this.referencesInfo;
  }

  isFormValid(): boolean {
    // Validar que todas las calificaciones y los campos de texto están completos
    return (
      this.selectedRatingC !== undefined &&
      this.selectedRatingL !== undefined &&
      this.selectedRatingT !== undefined &&
      this.selectedRatingR !== undefined &&
      this.selectedRatingP !== undefined &&
      this.selectedRatingTE !== undefined &&
      this.selectedRatingCO !== undefined &&
      this.referencesInfo.nombreReferencia.trim() !== '' &&
      this.referencesInfo.cargo.trim() !== '' &&
      this.referencesInfo.empresa.trim() !== '' &&
      this.referencesInfo.telefonosContacto.trim() !== ''
    );
  }

  onSubmit() {
    if (!this.isFormValid()) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Obtén el `user_id` (puede venir del backend o de un almacenamiento local)
    const userId =
      this.userRegistrationService.getStepData('personalInfo').id;
    // Reemplázalo con la lógica para obtener el ID real

    // Guarda los datos de referencias en el servicio
    this.userRegistrationService.setStepData('referencesInfo', this.referencesInfo);

    // Envía los datos de referencias al backend
    this.userRegistrationService.submitAllData(userId).subscribe({
      next: (response) => {
        console.log('Datos de referencias enviados:', response);
        alert('Datos de referencias enviados correctamente!');
        this.router.navigate(['/user/information']);
      },
      error: (error) => {
        console.error('Error al enviar datos de referencias:', error);
        alert('Hubo un error al enviar los datos de referencias. Intenta nuevamente.');
      }
    });
  }
}
