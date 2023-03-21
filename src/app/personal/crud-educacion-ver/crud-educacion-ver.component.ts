import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { EducacionFormulario } from 'src/app/modelo/educacion-formulario';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from 'src/app/services/inicio.service';


@Component({
  selector: 'app-crud-educacion-ver',
  templateUrl: './crud-educacion-ver.component.html',
  styleUrls: ['./crud-educacion-ver.component.css']
})
export class CrudEducacionVerComponent implements OnInit {

  constructor(public cv: CVService, private educacionService:EducacionService, private activateRoute:ActivatedRoute, private inicioService:InicioService) { }

  ngOnInit(): void {

  }
  get Usuario() {
    return this.inicioService.currentUserSubjet
  }
  educacionBorrar(id:Number) {
    this.educacionService.borrarEducacion(id).subscribe((data) =>{location.reload();})
    }
  educacionEditar(educacionFormulario:EducacionFormulario) {
      this.educacionService.editarEducacion(educacionFormulario).subscribe((data)=>{})
    }

}
