import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CVService } from './services/cv.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkinsComponent } from './skins/skins.component';
import { InicioComponent } from './inicio/inicio.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CrudSkinsComponent } from './personal/crud-skins/crud-skins.component';
import { InterceptorService } from './services/interceptor.service';
import { CrudSkinsVerComponent } from './personal/crud-skins-ver/crud-skins-ver.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { CrudEducacionVerComponent } from './personal/crud-educacion-ver/crud-educacion-ver.component';
import { CrudEducacionCargarComponent } from './personal/crud-educacion-cargar/crud-educacion-cargar.component';
import { CrudExperienciaVerComponent } from './personal/crud-experiencia-ver/crud-experiencia-ver.component';
import { CrudExperienciaCargarComponent } from './personal/crud-experiencia-cargar/crud-experiencia-cargar.component';
import { CrudServiciosVerComponent } from './personal/crud-servicios-ver/crud-servicios-ver.component';
import { CrudServiciosCargarComponent } from './personal/crud-servicios-cargar/crud-servicios-cargar.component';
import { CrudTestimoniosCargarComponent } from './personal/crud-testimonios-cargar/crud-testimonios-cargar.component';
import { CrudTestimoniosVerComponent } from './personal/crud-testimonios-ver/crud-testimonios-ver.component';
import { CrudDatosVerComponent } from './personal/crud-datos-ver/crud-datos-ver.component';
import { CrudDatosCargarComponent } from './personal/crud-datos-cargar/crud-datos-cargar.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    SkinsComponent,
    InicioComponent,
    PorfolioComponent,
    MensajesComponent,
    CrudSkinsComponent,
    CrudSkinsVerComponent,
    EditPersonalComponent,
    CrudEducacionVerComponent,
    CrudEducacionCargarComponent,
    CrudExperienciaVerComponent,
    CrudExperienciaCargarComponent,
    CrudServiciosVerComponent,
    CrudServiciosCargarComponent,
    CrudTestimoniosCargarComponent,
    CrudTestimoniosVerComponent,
    CrudDatosVerComponent,
    CrudDatosCargarComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CVService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  },
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}



