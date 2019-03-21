import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  signal_app_id: string = "a5a0688d-fba4-4bb5-8cf2-e50143e6b4f8";
  firebase_id:string = "677592847633";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();

    oneSignal.startInit(this.signal_app_id, this.firebase_id);

    oneSignal.inFocusDisplaying(oneSignal.OSInFocusDisplayOption.InAppAlert);

    oneSignal.handleNotificationReceived().subscribe((res) => {
    // do something when notification is received
    console.log(res);
    });

    oneSignal.handleNotificationOpened().subscribe((res) => {
      // do something when a notification is opened
      console.log(res);
    });
    
    oneSignal.endInit();

    oneSignal.getIds().then((id)=>{
      console.log(id);
      this.presentAlertMultipleButtons(id);
    });

    
  }
  async presentAlertMultipleButtons(id) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: JSON.stringify(id),
      buttons: ['Cancel']
    });

    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
