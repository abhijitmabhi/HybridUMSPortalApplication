import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController, private router: Router) { }

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
    let route = 'profile';
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
            // localStorage.setItem('route', route);
            // this.router.navigate(['/error-landing']);
          }
        }
      ]
    });
    await alert.present();
  }

  async alertErrorWithLandingPage(msg, route){
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
            localStorage.setItem('route', route);
            this.router.navigate(['/error-landing']);
          } 
        }
      ]
    });
    await alert.present();
  }
}
