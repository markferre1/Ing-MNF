import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CrudEducacionCargarComponent } from './personal/crud-educacion-cargar/crud-educacion-cargar.component';
import { CrudExperienciaVerComponent } from './personal/crud-experiencia-ver/crud-experiencia-ver.component';
import { CrudExperienciaCargarComponent } from './personal/crud-experiencia-cargar/crud-experiencia-cargar.component';
import { CrudServiciosCargarComponent } from './personal/crud-servicios-cargar/crud-servicios-cargar.component';
import { CrudTestimoniosCargarComponent } from './personal/crud-testimonios-cargar/crud-testimonios-cargar.component';
import { CrudDatosCargarComponent } from './personal/crud-datos-cargar/crud-datos-cargar.component';
import { CrudSkinsVerComponent } from './personal/crud-skins-ver/crud-skins-ver.component';
import { CrudSkinsComponent } from './personal/crud-skins/crud-skins.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { GuardMensajesGuard } from './services/guard-mensajes.guard';


const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'porfolio', component:PorfolioComponent},
  {path:'mensajes', component:MensajesComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/skins', component:CrudSkinsComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/skins/:id', component:CrudSkinsComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/educacion', component:CrudEducacionCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/educacion/:id', component:CrudEducacionCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/experiencia', component:CrudExperienciaCargarComponent , canActivate:[GuardMensajesGuard]},
  {path:'crud/experiencia/:id', component:CrudExperienciaCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/servicios', component:CrudServiciosCargarComponent , canActivate:[GuardMensajesGuard]},
  {path:'crud/servicios/:id', component:CrudServiciosCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/testimonios', component:CrudTestimoniosCargarComponent , canActivate:[GuardMensajesGuard]},
  {path:'crud/testimonios/:id', component:CrudTestimoniosCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'crud/datos', component:CrudDatosCargarComponent , canActivate:[GuardMensajesGuard]},
  {path:'crud/datos/:id', component:CrudDatosCargarComponent, canActivate:[GuardMensajesGuard]},
  {path:'experiencia', component:CrudExperienciaVerComponent, canActivate:[GuardMensajesGuard]},
  {path:'skins', component:CrudSkinsVerComponent, canActivate:[GuardMensajesGuard]},
  {path:'edit', component:EditPersonalComponent, canActivate:[GuardMensajesGuard]},
  {path:'', redirectTo:'porfolio', pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
