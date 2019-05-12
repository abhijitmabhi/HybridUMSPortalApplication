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
  isShowLoginPage:any;

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
    // this.User.password = '26103588';
    this.User.username = '16-31332-1';
    // this.User.username = '1801-1848-3';
    this.User.password = '243866';
    // this.User.password = '26103588';

  }

  ionViewDidEnter() {
    if (localStorage.getItem('token')) {
      this.isShowLoginPage = true;
      this.redirect();
    }
    else{
      this.isShowLoginPage = false;
    } 
  }

  logForm() {
    this.loadingService.loadingStart();
    this.loginProvider.login(this.User).subscribe(res => {
      this.Cred = res;
      // console.log(res);
      //Save Token into local torage
      localStorage.setItem('token', this.Cred.access_token);

      //Get UserType
      //Subscibe to onesignal
      //get playerID from onesignal
      //Save playerId and userId into database
      this.getUserTypeAndSubscribeOneSignal();

    }, err => {
      this.loadingService.loadingDismiss();
      this.alertService.alertError("Something went wrong");
    }); 
  }

  async getUserTypeAndSubscribeOneSignal() {
    this.loginProvider.usergetCurrentUserInfo().subscribe(res => {
      //Get usertype
      this.userType = res.Data;

      console.log(this.userType);

      localStorage.setItem('userType', this.userType.UserType);
      
      //Subscribing to onesignal & retrive player id
      this.pushNotification.oneSignalSubscription();

      this.loadingService.loadingDismiss();

      this.redirect();
      // this.alertService.Success("Login Success");
    });
  }

  redirect(){
    let user_type = localStorage.getItem('userType');
    // console.log(user_type);
    if(user_type == "0")
    {
        this.menuCtrl.enable(true,"student");
        this.router.navigate(['/home']);
    }
        
    if(user_type == "3" || user_type == "1")
    {
        this.menuCtrl.enable(true,"employee");
        this.router.navigate(['/employee-home']);
    }
  }

}



