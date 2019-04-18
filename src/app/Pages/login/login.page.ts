import { LoadingService } from 'src/app/core/loader/loading.service';
import { UserModel, CredModel } from './loginModel';
import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';
import { Router } from '@angular/router';
import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  User: any;
  Cred: any;
  userType: any;



  constructor(
    private loginProvider: LoginApiProvider,
    private menuCtrl: MenuController,
    private router: Router,
    public alertCtrl: AlertController,
    private loadingService: LoadingService,
    private pushNotification: PushNotificationService
  ) {
    this.menuCtrl.enable(false);
    this.User = UserModel;
    this.Cred = CredModel;

    this.User.username = '16-31332-1';
    this.User.password = '243866';

  }

  ionViewDidEnter() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  logForm() {
    this.loadingService.loadingStart();
    this.loginProvider.login(this.User).subscribe(res => {
      this.Cred = res;
      localStorage.setItem('token', this.Cred.access_token);
      this.pushNotification.oneSignalSubscription();
      this.getUserType();
      // Save app id into Database for push notification
    }, err => {
      this.loadingService.loadingDismiss();
      console.log(err);
    });
  }

  getUserType() {
    this.loginProvider.usergetCurrentUserInfo().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.userType = res.Data;
      console.log(this.userType.UserStatus);
      if(this.userType.UserStatus === 1)
          this.router.navigate(['/home']);
      console.log("After Login");
    })
  }



  async presentAlertMultipleButtons(id) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: JSON.stringify(id),
      buttons: ['Cancel']
    });

    await alert.present();
  }

}
