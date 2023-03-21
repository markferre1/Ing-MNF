import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { SkinsService } from 'src/app/services/skins.service';
import { InicioService } from 'src/app/services/inicio.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { skinsFormulario } from 'src/app/modelo/skinsFormulario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-skins-ver',
  templateUrl: './crud-skins-ver.component.html',
  styleUrls: ['./crud-skins-ver.component.css']
})
export class CrudSkinsVerComponent implements OnInit {
  constructor(public cv: CVService, private skinsService:SkinsService, public _router: Router, public _location: Location, ruta:Router, private activateRoute:ActivatedRoute, private inicioService:InicioService)
  {}

  ngOnInit(): void {
  }
  get Usuario() {
    return this.inicioService.currentUserSubjet
  }
  skinBorrar(id:Number) {
    this.skinsService.borrarSkins(id).subscribe((data) =>{location.reload();})
    }
  skinEditar(skinsformulario:skinsFormulario) {
      this.skinsService.editarSkins(skinsformulario).subscribe((data)=>{})
    }

}
