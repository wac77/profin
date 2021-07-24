import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Components[] = [
  {
    icon:'pie-chart-outline',
    name:'Progres',
    redirectTo:'/progress'
  }, 
  {
    icon:'refresh-circle-outline',
    name: 'refresher',
    redirectTo:'/refresher'
  },
  
  {
    icon:'albums-outline',
    name:'Slides',
    redirectTo:'/slides'
  },
  {
    icon:'clipboard-outline',  
    name:'toast',
    redirectTo:'/toast'
  },
  {
    icon:'unlink-outline',
    name:'Segment',
    redirectTo:'/segment'
  },


  ]
  constructor() { }

  ngOnInit() {
  }

}

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}