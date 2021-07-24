import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
    
  progress = 0.20;   
   constructor() {  
     setInterval( () => {  
       this.progress += .1;  
       }, 1000 );  
   } 

    ngOnInit() {
    }
}
