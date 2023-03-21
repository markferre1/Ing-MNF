import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { InicioService } from './inicio.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

   constructor(private inicioService:InicioService) {
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     var currentUser = this.inicioService.usuarioAutenticado;
     var currentUserToken = sessionStorage['token'] ;
      if(currentUser && currentUserToken) {
        req=req.clone( {
          setHeaders: {
                    "Authorization": `${currentUserToken}`
                      }
        } )

      }
      return next.handle(req);
  }
}
