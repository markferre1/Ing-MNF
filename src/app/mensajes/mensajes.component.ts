import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';
import { InicioService } from '../services/inicio.service';
import { ContactoService } from '../services/contacto.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {


opcion:number =0;


  constructor(public cv: CVService, private contactoService:ContactoService, private inicioService:InicioService) { }
  currentUser = this.inicioService.usuarioAutenticado;
  ngOnInit(): void {
   }


   Borrar(id:Number) {
      this.contactoService.borrarMensaje(id)
      .subscribe((data) =>{location.reload();})
   }

}
