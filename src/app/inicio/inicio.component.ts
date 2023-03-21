import { Component, OnInit } from '@angular/core';
import { InicioService } from '../services/inicio.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  iniformu:FormGroup
  constructor(private formBuilder:FormBuilder, private inicioService:InicioService, private ruta:Router) {
    this.iniformu=this.formBuilder.group(
      {
        mail:[''],
        contraseña:[''],
        headers: {
                  'Accept':'aplication/json',
                  'Content-Type':'aplication/json',
                 }
      }
    );
  }

  ngOnInit(): void {
  }


  get Correo() {
    return this.iniformu.get('mail');
  }
  get Contraseña() {
    return this.iniformu.get('contraseña');
  }
  variableDeDatos:string="";
  onIniciar(event:Event) {
    event.preventDefault();
    this.inicioService.IniciarSesion(this.iniformu.value).subscribe((data:any) =>
     {this.inicioService.currentUserSubjet;
      this.variableDeDatos = data.token;
      this.ruta.navigate(['/edit']);
      sessionStorage['token'] = this.variableDeDatos;
      })
  }

  onRegistrar(event:Event) {
    event.preventDefault();
    this.inicioService.CargarUsuario(this.iniformu.value).subscribe((data:any) =>
     {
      })
  }
    }
