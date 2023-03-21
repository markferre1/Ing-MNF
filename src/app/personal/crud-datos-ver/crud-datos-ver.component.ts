import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { DatosService } from 'src/app/services/datos.service';
import { Datos } from 'src/app/modelo/datos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-datos-ver',
  templateUrl: './crud-datos-ver.component.html',
  styleUrls: ['./crud-datos-ver.component.css']
})
export class CrudDatosVerComponent implements OnInit {

  constructor(public cv: CVService, private datosService:DatosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
    datosBorrar(id:Number) {
    this.datosService.borrarDatos(id).subscribe((data) =>{location.reload();})
    }
    datosEditar(datos:Datos) {
      this.datosService.editarDatos(datos).subscribe((data)=>{})
    }
}
