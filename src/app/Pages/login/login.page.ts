import { LoadingService } from 'src/app/core/loader/loading.service';
import { UserModel, CredModel } from './loginModel';
import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';
import { Router } from '@angular/router';
import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';
import { AlertService } from 'src/app/Core/alert/alert.service';


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
    private pushNotification: PushNotificationService,
    private alertService: AlertService
  ) {
    this.menuCtrl.enable(false);
    this.User = UserModel;
    this.Cred = CredModel;

    // this.User.username = '16-31332-1';
    this.User.username = '1801-1848-3';
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
      
      //Save Token into local torage
      localStorage.setItem('token', this.Cred.access_token);

      //Get UserType
      //Subscibe to onesignal
      //get playerID from onesignal
      //Save playerId and userId into database
      this.getUserTypeAndSubscribeOneSignal(this.User.username);

    }, err => {
      this.loadingService.loadingDismiss();
      console.log(err);
    });
  }

  async getUserTypeAndSubscribeOneSignal(userID) {
    this.loginProvider.usergetCurrentUserInfo().subscribe(res => {
      
      //Get usertype
      this.userType = res.Data;
      
      //Subscribing to onesignal & retrive player id
      this.pushNotification.oneSignalSubscription();
      let playerID = this.pushNotification.getPlayerID();

      //Save plaerID with userID into database
      this.loginProvider.savePLayerIDIntoDatabase(userID, playerID);  

      if(this.userType.UserType === 0)
      {
          this.menuCtrl.enable(true,"student");
          this.router.navigate(['/home']);
      }
          
      if(this.userType.UserType === 3)
      {
          this.menuCtrl.enable(true,"employee");
          this.router.navigate(['/employee-home']);
      }

      this.loadingService.loadingDismiss();
      this.alertService.alertStart("Login Success");
    });
  }
}
