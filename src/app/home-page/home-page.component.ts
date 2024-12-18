import {Component} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FooterComponent, NavbarComponent, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  cardTitle1 = 'Ambiente amigable'

  cardText1 = 'Somos un equipo apasionado por la agricultura sostenible que trabaja en\n' +
    '            armonía con la naturaleza. Nuestro objetivo es cultivar fresas de la más alta calidad,\n' +
    '            utilizando métodos hidropónicos que respetan el medio ambiente y garantizan un producto\n' +
    '            fresco y saludable.'

  cardTitle2 = 'Cultivos'

  cardText2 = 'Cada fresa que cultivamos es un paso hacia un futuro más sostenible.\n' +
    '            Nuestras prácticas respetuosas con el medio ambiente nos permiten ofrecerte productos\n' +
    '            frescos y saludables sin comprometer el planeta'

  cardTitle3 = 'Equipo cientifico'

  cardText3 = 'En nuestro laboratorio, exploramos las últimas tendencias en nutrición\n' +
    '            vegetal, fitorremediación y biotecnología agrícola. Aplicamos estos conocimientos para\n' +
    '            desarrollar soluciones innovadoras que garanticen la excelencia de nuestras fresas'

  cardPhoto1 = 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg'
}
