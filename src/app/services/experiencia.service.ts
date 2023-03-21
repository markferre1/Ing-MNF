import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-mark.onrender.com";
  
  borrarExperiencia(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"/api/experiencia/delete/"+id);
  }
  editarExperiencia(experiencia:Experiencia):Observable<any> {
    return this.httpClient.put<Experiencia>(this.Url+"/api/experiencia/edit/"+experiencia.id, experiencia);
  }
  recuperarExperiencia(id:Number) {
    return this.httpClient.get<Experiencia>(this.Url+"/api/experiencia/"+id);
  }
  cargarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<Experiencia>(this.Url+"/api/experiencia/nuevo/", experiencia);
     }
}
