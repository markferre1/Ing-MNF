import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';
import { ContactoService } from '../services/contacto.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  formu:FormGroup
  constructor(public cv: CVService, private formBuilder:FormBuilder, private contactoService:ContactoService) {
    this.formu=this.formBuilder.group(
      {
        nombre:[],
        mail:[],
        mensaje:[],
      }
    )
  }

  ngOnInit(): void {
              }

  get Nombre() {
    return this.formu.get('nombre');
  }
  get Correo() {
    return this.formu.get('mail');
  }
  get Mensaje() {
    return this.formu.get('mensaje');
  }

  onEnviar(event:Event) {
    event.preventDefault();
    const value=this.formu.value;
    this.contactoService.CargarMensaje(this.formu.value).subscribe(data => {location.reload();})
    }

  }



