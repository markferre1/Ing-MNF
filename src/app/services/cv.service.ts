import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  personal: any[] = [];
  datos: any[] = [];
  skins: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  servicio: any[] = [];
  testimonio: any[] = [];
  formulario: any ;



  constructor(private http:HttpClient) {
    this.CargarSkins();
    this.CargarDatos();
    this.CargarExperiencia();
    this.CargarServicios();
    this.CargarTestimonio();
    this.CargarEducacion();
    this.VerMensajes();

  }

  Url="https://cv-back-mark.onrender.com";
  private CargarDatos(){
    this.http.get(this.Url+'/api/datos')
    .subscribe((respu: any) => {
      this.datos = respu;
      });
  }

  private CargarEducacion(){
    this.http.get(this.Url+'/api/educacion').subscribe((respu: any) => {
      this.educacion = respu;
      });
  }
  //Skins
  private CargarSkins(){
    this.http.get(this.Url+'/api/skins')
    .subscribe((respu: any) => {
      this.skins = respu;
      });
   }

  private CargarExperiencia(){
    this.http.get(this.Url+'/api/experiencia')
    .subscribe((respu: any) => {
      this.experiencia = respu;
      });
  }
  private CargarServicios(){
    this.http.get(this.Url+'/api/servicios')
    .subscribe((respu: any) => {
      this.servicio = respu;
     });
  }
  private CargarTestimonio(){
    this.http.get(this.Url+'/api/testimonio')
    .subscribe((respu: any) => {
      this.testimonio = respu;
     });
  }
  private VerMensajes() {
    this.http.get(this.Url+'/api/mensajes')
   .subscribe((respu: any) => {
     this.formulario = respu;
    });
  }




}



