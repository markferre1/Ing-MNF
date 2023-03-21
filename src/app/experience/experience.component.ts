import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {
  }

}
