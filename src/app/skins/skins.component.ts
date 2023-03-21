import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {
  }

}
