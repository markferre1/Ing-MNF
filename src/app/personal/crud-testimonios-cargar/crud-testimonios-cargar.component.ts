import { Component, OnInit } from '@angular/core';
import { TestimoniosService } from 'src/app/services/testimonios.service';
import { Testimonios } from 'src/app/modelo/testimonios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-testimonios-cargar',
  templateUrl: './crud-testimonios-cargar.component.html',
  styleUrls: ['./crud-testimonios-cargar.component.css']
})
export class CrudTestimoniosCargarComponent implements OnInit {
  testimonios:Testimonios = new Testimonios();
  constructor(private testimoniosService:TestimoniosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id:Number = params['id'];
      if (id) {
        this.testimoniosService.recuperarTestimonios(id).subscribe(response => {
          this.testimonios = response;
          });}
    })
  }

  onEnviar() {
    this.testimoniosService.cargarTestimonios(this.testimonios).subscribe(response => {})
  }
  onActualizar() {
    this.testimoniosService.editarTestimonios(this.testimonios).subscribe(response => {})
  }
}
