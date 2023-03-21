import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { EducacionFormulario } from 'src/app/modelo/educacion-formulario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-educacion-cargar',
  templateUrl: './crud-educacion-cargar.component.html',
  styleUrls: ['./crud-educacion-cargar.component.css']
})
export class CrudEducacionCargarComponent implements OnInit {
  educacionFormulario:EducacionFormulario = new EducacionFormulario();

  constructor(private educacionService:EducacionService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.educacionService.recuperarEducacion(id).subscribe(response => {
          this.educacionFormulario = response;
          });}
    })
  }
  onEnviar() {
    this.educacionService.cargarEducacion(this.educacionFormulario).subscribe(response => {})
  }
  onActualizar() {
    this.educacionService.editarEducacion(this.educacionFormulario).subscribe(response => {})
  }

}
