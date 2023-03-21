import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-experiencia-cargar',
  templateUrl: './crud-experiencia-cargar.component.html',
  styleUrls: ['./crud-experiencia-cargar.component.css']
})
export class CrudExperienciaCargarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  constructor(private experienciaService:ExperienciaService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.experienciaService.recuperarExperiencia(id).subscribe(response => {
          this.experiencia = response;
          });}
    })
  }

  onEnviar() {
    this.experienciaService.cargarExperiencia(this.experiencia).subscribe(response => {})
  }
  onActualizar() {
    this.experienciaService.editarExperiencia(this.experiencia).subscribe(response => {})
  }

}
