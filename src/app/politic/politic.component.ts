import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-politic',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './politic.component.html',
  styleUrl: './politic.component.css'
})
export class PoliticComponent {
  data = {
    title: 'Política de Protección de Datos',
    sections: [
      {
        title: '1. Introducción',
        content:
          'En Nombre de la organización SweetCol, estamos comprometidos con la protección de la privacidad y los datos personales de nuestros usuarios, clientes, empleados y cualquier persona cuyos datos procesemos. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos tus datos personales en conformidad con las leyes de protección de datos aplicables.',
      },
      {
        title: '2. Objetivo',
        content:
          'Esta política tiene como objetivo establecer los lineamientos para el manejo de datos personales, garantizando el respeto a los derechos de los titulares de datos y el cumplimiento con las normativas legales aplicables en materia de protección de datos.',
      },
      {
        title: '3. Alcance',
        content:
          'Esta política aplica a toda la información personal que recopilamos y procesamos en nuestro sistema, en formato electrónico, y es de cumplimiento obligatorio para todos los colaboradores, contratistas y proveedores que tengan acceso a dichos datos.',
      },
      {
        title: '4. Definiciones',
        definitions: [
          {
            term: 'Datos Personales',
            definition:
              'Información que permite identificar directa o indirectamente a una persona física, como nombre, dirección, número de teléfono, correo electrónico, información financiera, entre otros.',
          },
          {
            term: 'Responsable del Tratamiento',
            definition:
              'SweetCol quien decide sobre la finalidad y el tratamiento de los datos personales.',
          },
          {
            term: 'Titular de los Datos',
            definition:
              'Persona natural a quien pertenecen los datos personales.',
          },
        ],
      },
      {
        title: '5. Principios para el Tratamiento de Datos',
        principles: [
          'Licitud, Lealtad y Transparencia: Procesamos datos de forma lícita, justa y transparente.',
          'Limitación de la Finalidad: Solo recopilamos datos con finalidades explícitas y legítimas, informadas al titular.',
          'Minimización de Datos: Solo solicitamos y procesamos los datos estrictamente necesarios.',
          'Exactitud: Nos aseguramos de que los datos estén actualizados y sean exactos.',
          'Limitación del Plazo de Conservación: Almacenamos los datos solo durante el tiempo necesario para el propósito para el cual fueron recolectados.',
          'Integridad y Confidencialidad: Implementamos medidas de seguridad para proteger los datos contra el acceso no autorizado o ilícito, pérdida, destrucción o daño accidental.',
        ],
      },
    ],
    downloadPolicy: 'Descargar Política de Protección de Datos',
    downloadLaw: 'Descargar Ley de Protección de Datos',
    sustainability: 'SOSTENIBILIDAD UN COMPROMISO DE TODOS',
  };
}


