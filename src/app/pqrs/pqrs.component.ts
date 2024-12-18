import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pqrs',
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.css'
})
export class PqrsComponent {
  title = 'Contar con su opinión nos hace mejorar'

  textTitle = 'Déjenos saber cuál ha sido su experiencia con nuestro servicio. Por favor\n' +
    '        diligencie el formulario a continuación.\n' +
    '\n' +
    '        Si lo desea puede hacer clic en el botón para hablar con un representante por WhatsApp'

  subText = 'Si tiene alguna petición, queja o reclamo, por favor diligencie el siguiente formulario.'

  optionList: String[] = [
    'Peticiones',
    'Quejas',
    'Reclamos',
    'Sugerencias'
  ]

}
