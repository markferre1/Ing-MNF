import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CVService } from 'src/app/services/cv.service';
import { InicioService } from 'src/app/services/inicio.service';
import { SkinsService } from 'src/app/services/skins.service';
import { skinsFormulario } from 'src/app/modelo/skinsFormulario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-skins',
  templateUrl: './crud-skins.component.html',
  styleUrls: ['./crud-skins.component.css']
})
export class CrudSkinsComponent implements OnInit {
  skinsformulario:skinsFormulario = new skinsFormulario();

    opcion:number =1;

  constructor(private cv: CVService, private formBuilder:FormBuilder, private skinsService:SkinsService, private activateRoute:ActivatedRoute, private inicioService:InicioService) {

  }
 

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.skinsService.recuperarSkins(id).subscribe(response => {
          this.skinsformulario = response;
      });}
    })

  }

    onEnviar() {
      this.skinsService.cargarSkins(this.skinsformulario).subscribe(response => {})
    }
    onActualizar() {
      this.skinsService.editarSkins(this.skinsformulario).subscribe(response => {})
    }

}
