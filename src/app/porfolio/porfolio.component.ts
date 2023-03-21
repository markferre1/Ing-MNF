import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {
  }

}
