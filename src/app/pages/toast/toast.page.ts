import { Component } from '@angular/core';
import {ToastController } from '@ionic/angular';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {

  constructor(public toastCtrl: ToastController) { }  
   async openToast() {   
     const toast = await this.toastCtrl.create({  
       message: 'Historial guardado',  
       animated: true,    
       position: 'middle',  
     });  
     toast.present();  
     toast.onDidDismiss().then((val) => {  
       console.log('notificación correcta');   
     });  
   }  

}
