import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async Success(obj){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: obj ? obj  :'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertError(msg){
    const alert = await this.alertController.create({
      header: 'Oops!',
      subHeader: '',
      message: msg ? msg  :'Something Went Wrong',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
              console.log("Redirect");
          }
        }
      ]
    });
    await alert.present();
  }
}
