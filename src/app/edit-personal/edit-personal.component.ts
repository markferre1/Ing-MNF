import { Component, OnInit, Output } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css']
})
export class EditPersonalComponent implements OnInit {

  option:Number = new Number;
  @Output()

 public activarComponente(option:Number){
   this.option = option;
 }
  constructor(public inicioService:InicioService) { }

  ngOnInit(): void {
         }
  }

