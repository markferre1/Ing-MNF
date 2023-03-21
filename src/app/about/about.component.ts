import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {

  }

}
