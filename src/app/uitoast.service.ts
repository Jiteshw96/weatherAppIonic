import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

/**
 * Inject to root of app
*/
@Injectable({
  providedIn: 'root'
})

/**
 * Service for Toast
*/
export class UIToastService {
  

 /**
 * Constructor description
 * @param {ToastController} toastController From ionic/angular
 */
  constructor(public toastController: ToastController) { }

/**
* Network issue Toast
*/
  public async presentToast() {
    const toast = await this.toastController.create({
      message: 'Network issue ...',
      duration: 1200,
      cssClass:"toast-width-class"
    });
    toast.present();
  }

/**
* Toast With Option
*/
  public async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}