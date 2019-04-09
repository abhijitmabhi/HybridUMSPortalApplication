import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  loading: any;

  async loadingStart(){
    this.loading = await this.loadingCtrl.create({
        spinner: "crescent",
        translucent: true,
        });
    await this.loading.present();
  }

  loadingDismiss(){
      this.loading.dismiss();
  }
}
