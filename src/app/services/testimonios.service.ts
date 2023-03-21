import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonios } from '../modelo/testimonios';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-mark.onrender.com";
  borrarTestimonios(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"/api/testimonio/delete/"+id);
  }
  editarTestimonios(testimonios:Testimonios):Observable<any> {
    return this.httpClient.put<Testimonios>(this.Url+"/api/testimonio/edit/"+testimonios.id, testimonios);
  }
  recuperarTestimonios(id:Number) {
    return this.httpClient.get<Testimonios>(this.Url+"/api/testimonio/"+id);
  }
  cargarTestimonios(testimonios:Testimonios):Observable<any>{
    return this.httpClient.post<Testimonios>(this.Url+"/api/testimonio/nuevo/", testimonios);
     }
}
