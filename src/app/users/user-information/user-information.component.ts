import {Component, OnInit} from '@angular/core';
import {TableComponent} from '../../shared/table/table.component';
import {NavbarComponent} from '../../navbar/navbar.component';
import {FooterComponent} from '../../footer/footer.component';
import {DataService} from '../../services/data.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-information',
  imports: [
    TableComponent,
    NavbarComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent implements OnInit {


  tableColumns: string[] = ['cedula', 'nombre', 'genero', 'nose', 'nose2', 'nose4'];

  tableData: any[] = [];

  constructor(private dataService: DataService) {
  }

  loading = true; // Estado de carga

  ngOnInit() {
    this.dataService.getDataForModule('information').subscribe(
      (response) => {
        this.tableData = response;

        this.loading = false; // Finaliza la carga

      },
      (error) => {
        console.error('Error al obtener datos del backend', error);
        this.loading = false; // Finaliza la carga incluso en error
      }
    );

  }


}
