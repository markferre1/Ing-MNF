import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from '../modelo/datos';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-mark.onrender.com";
  borrarDatos(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"/api/datos/delete/"+id);
  }
  editarDatos(datos:Datos):Observable<any> {
    return this.httpClient.put<Datos>(this.Url+"/api/datos/edit/"+datos.id, datos);
  }
  recuperarDatos(id:Number) {
    return this.httpClient.get<Datos>(this.Url+"/api/datos/"+id);
  }
  cargarDatos(datos:Datos):Observable<any>{
    return this.httpClient.post<Datos>(this.Url+"/api/datos/nuevo/", datos);
     }
}
