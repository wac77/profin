import { Component } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {

  dummyList: any [] = [];  
  constructor() {}  
  doRefresh(event) {  
    console.log('Cague exitoso');  
    setTimeout(() => {  
      this.dummyList = Array(10);  
      event.target.complete();  
    }, 2000);  
  }  

}
