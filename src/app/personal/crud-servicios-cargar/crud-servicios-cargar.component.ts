import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Servicios } from 'src/app/modelo/servicios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-servicios-cargar',
  templateUrl: './crud-servicios-cargar.component.html',
  styleUrls: ['./crud-servicios-cargar.component.css']
})
export class CrudServiciosCargarComponent implements OnInit {
  servicios:Servicios = new Servicios();
  constructor(private serviciosService:ServiciosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.serviciosService.recuperarServicios(id).subscribe(response => {
          this.servicios = response;
          });}
    })
  }

  onEnviar() {
    this.serviciosService.cargarServicios(this.servicios).subscribe(response => {})
  }
  onActualizar() {
    this.serviciosService.editarServicios(this.servicios).subscribe(response => {})
  }
}
