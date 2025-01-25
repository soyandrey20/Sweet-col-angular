import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {NgForOf, TitleCasePipe} from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    MatTable,
    MatPaginator,
    TitleCasePipe,
    NgForOf,

    MatHeaderCell,

    MatColumnDef,
    MatCell,
    MatHeaderRow,

    MatRow,

    MatLabel,
    MatFormField,
    MatInput,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef,
  ],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = []; // Columnas para las cabeceras
  @Input() data: any[] = []; // Datos de la tabla

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Vincula el paginador

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    // Configura la paginación
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  /**
   * Aplica el filtro a la tabla.
   * @param filterValue Valor del filtro
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Filtra ignorando mayúsculas/minúsculas
  }
}
