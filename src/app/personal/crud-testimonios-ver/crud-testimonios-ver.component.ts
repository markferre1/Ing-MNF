import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';
import { TestimoniosService } from 'src/app/services/testimonios.service';
import { Testimonios } from 'src/app/modelo/testimonios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-testimonios-ver',
  templateUrl: './crud-testimonios-ver.component.html',
  styleUrls: ['./crud-testimonios-ver.component.css']
})
export class CrudTestimoniosVerComponent implements OnInit {

  constructor(public cv: CVService, private testimoniosService:TestimoniosService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  testimoniosBorrar(id:Number) {
    this.testimoniosService.borrarTestimonios(id).subscribe((data) =>{location.reload();})
    }
    testimoniosEditar(testimonios:Testimonios) {
      this.testimoniosService.editarTestimonios(testimonios).subscribe((data)=>{})
    }
}
