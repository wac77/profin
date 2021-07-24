import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {
   slideopts = { 
    initialSlide: 1, 
    speed: 350, 
    effect: 'flip', 
    }; 

  constructor() { }

  
}
