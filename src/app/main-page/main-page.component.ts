import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-main-page',
  imports: [
    NavbarComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


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

  cardPhoto1 = 'https://media.istockphoto.com/id/2012746941/photo/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.jpg?s=2048x2048&w=is&k=20&c=GIo2jDxqi_K5O-5myAvE-02qutkeNoWdXqJMB5lxues='
}
