import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-experiencia-ver',
  templateUrl: './crud-experiencia-ver.component.html',
  styleUrls: ['./crud-experiencia-ver.component.css']
})
export class CrudExperienciaVerComponent implements OnInit {

  constructor(public cv: CVService, private experienciaService:ExperienciaService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  experienciaBorrar(id:Number) {
    this.experienciaService.borrarExperiencia(id).subscribe((data) =>{location.reload();})
    }
    experienciaEditar(experiencia:Experiencia) {
      this.experienciaService.editarExperiencia(experiencia).subscribe((data)=>{})
    }
}
