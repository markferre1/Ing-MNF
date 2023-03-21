import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InicioService } from '../services/inicio.service';

@Injectable({
  providedIn: 'root'
})
export class GuardMensajesGuard implements CanActivate {

  constructor (private inicioService:InicioService, private ruta:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean
    | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let currentUserToken = sessionStorage['token'] ;
      let currentUser = this.inicioService.usuarioAutenticado;
    if(currentUser && currentUserToken)
     {return true; }
    else {
      this.ruta.navigate(['/inicio']);
      return false;
      }
    }
  }


