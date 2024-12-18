import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-history',
  imports: [CommonModule, RouterModule, FooterComponent, NavbarComponent, NgOptimizedImage],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  mainTitle = 'Nuestra historia';
  subtitle1 = 'Así nació sweetCol';
  subtitle2 = 'Formando empresa';
  subtitle3 = 'sweetCol, UNA REALIDAD';
  sustainabilityTitle = 'SOSTENIBILIDAD UN COMPROMISO DE TODOS';

  // Textos
  mainText = `
    La historia de sweetCol comenzó en el año 2015 cuando la ingeniera Clara Gómez, fundadora de la empresa,
    estaba trabajando en un proyecto de investigación sobre técnicas de cultivo sostenibles. Clara, apasionada
    por la agricultura y la tecnología, se dio cuenta del potencial que ofrecía la hidroponía para la
    producción de fresas en entornos controlados. Después de investigar y formarse en el ámbito de la
    hidroponía y el cultivo de fresas, Clara decidió dar el paso y emprender en este innovador sector.
  `;

  formingCompanyText = `
    Inició sweetCol con el apoyo de un socio técnico, quien aportó su experiencia en el diseño y montaje
    de sistemas hidropónicos. Comenzaron realizando pruebas y pequeños cultivos en un invernadero experimental,
    perfeccionando las técnicas y optimizando los sistemas de cultivo. Esta fase de aprendizaje y experimentación
    fue crucial para adquirir el conocimiento necesario y construir una base sólida para el negocio. En 2017,
    sweetCol fue oficialmente constituida como una sociedad anónima simplificada (S.A.S.).
  `;

  realityText = `
    En el 2018, sweetCol fue formalmente registrada en la Cámara de Comercio, con el objetivo de revolucionar
    el mercado de las fresas mediante técnicas de hidroponía avanzada. Desde su inicio, sweetCol se ha dedicado
    a la producción de fresas de alta calidad utilizando sistemas hidropónicos que garantizan un cultivo eficiente
    y sostenible. Su primer gran cliente fue una cadena de supermercados local que buscaba ofrecer fresas frescas
    y libres de pesticidas a sus clientes.

    A lo largo de los años, sweetCol ha crecido significativamente, diversificando su oferta de productos y servicios.
    En 2020, la empresa expandió sus operaciones al incluir la venta de sistemas hidropónicos a otros productores y la
    implementación de tecnologías innovadoras para el control del clima y nutrientes en los cultivos. En 2022, sweetCol
    comenzó a colaborar con entidades de investigación agrícola para desarrollar nuevas variedades de fresas y técnicas
    de cultivo más eficientes.

    Hoy en día, sweetCol es reconocida por su compromiso con la calidad y la sostenibilidad, y continúa creciendo en el
    mercado, ofreciendo soluciones innovadoras en hidroponía para la producción de fresas y contribuyendo al desarrollo
    de una agricultura más limpia y eficiente.
  `;

  meetPhoto = 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg';
}
