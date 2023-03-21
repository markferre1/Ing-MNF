import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Datos } from 'src/app/modelo/datos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-datos-cargar',
  templateUrl: './crud-datos-cargar.component.html',
  styleUrls: ['./crud-datos-cargar.component.css']
})
export class CrudDatosCargarComponent implements OnInit {

  datos:Datos = new Datos();
  constructor(private datosService:DatosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.datosService.recuperarDatos(id).subscribe(response => {
          this.datos = response;
          });}
    })
  }
  onEnviar() {
    this.datosService.cargarDatos(this.datos).subscribe(response => {})
  }
  onActualizar() {
    this.datosService.editarDatos(this.datos).subscribe(response => {})
  }
}
