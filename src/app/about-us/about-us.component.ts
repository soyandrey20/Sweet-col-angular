import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  textTitle = '¿Quiénes somos?'

  misionTitle = 'Misión'

  misionText = ' Ser líderes mundiales en la producción sostenible de fresas hidropónicas de alta calidad,\n' +
    '            utilizando tecnologías innovadoras para maximizar el rendimiento y minimizar el impacto\n' +
    '            ambiental, ofreciendo soluciones personalizadas a nuestros clientes y contribuyendo al\n' +
    '            desarrollo de comunidades agrícolas locales.'
  visionTitle = 'Visión'

  visionText = 'Ser la empresa líder mundial en la producción y exportación de fresas hidropónicas de la más\n' +
    '            alta calidad, transformando la industria agrícola a través de la innovación constante y la\n' +
    '            excelencia operativa. Estableceremos una presencia sólida en los mercados internacionales,\n' +
    '            siendo reconocidos como un referente en sostenibilidad y un socio confiable para nuestros\n' +
    '            clientes a nivel global.'

  principiosTitle = 'Principios corporativos'

  title1 = '• Innovación constante'

  text1 = 'Investigación y desarrollo de nuevas técnicas hidropónicas para optimizar la producción y la\n' +
    '              calidad de nuestras fresas.'

  title2 = '• Calidad:'

  text2 = 'Garantizamos la inocuidad y el sabor excepcional de nuestras fresas, superando las\n' +
    '              expectativas de nuestros clientes.'

  title3 = '• Bienestar del Cliente:'

  text3 = ' Nos dedicamos a satisfacer las necesidades y expectativas de nuestros clientes,\n' +
    '              proporcionando fresas saludables y nutritivas que contribuyan a su buen bienestar.'

  title4 = '• Calidad y Frescuras:'

  text4 = ' Nos comprometemos a ofrecer productos de la más alta calidad, garantizando frescura y sabor\n' +
    '              en cada fresa que producimos.'

  title5 = '• Colaboración:'

  text5 = 'Trabajamos en estrecha colaboración con nuestros productores, proveedores y clientes para\n' +
    '              crear un ecosistema agrícola más sostenible.'

  subText = 'SOSTENIBILIDAD UN COMPROMISO DE TODOS'


}
