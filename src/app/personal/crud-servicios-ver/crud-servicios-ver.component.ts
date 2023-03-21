import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Servicios } from 'src/app/modelo/servicios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-servicios-ver',
  templateUrl: './crud-servicios-ver.component.html',
  styleUrls: ['./crud-servicios-ver.component.css']
})
export class CrudServiciosVerComponent implements OnInit {

  constructor(public cv: CVService, private serviciosService:ServiciosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  serviciosBorrar(id:Number) {
    this.serviciosService.borrarServicios(id).subscribe((data) =>{location.reload();})
    }
    serviciosEditar(servicios:Servicios) {
      this.serviciosService.editarServicios(servicios).subscribe((data)=>{})
    }
}
