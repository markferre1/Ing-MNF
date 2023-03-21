import { Component } from '@angular/core';
import { CVService } from './services/cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej4';
  constructor(public cv: CVService) { }
  ngOnInit(): void {
  }

  iniSesion() {
    return 2;
  }
}
