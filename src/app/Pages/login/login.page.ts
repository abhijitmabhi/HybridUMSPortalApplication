import { UserModel, CredModel } from './loginModel';
import { Component } from '@angular/core';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  User: any;
  Cred: any;

  signal_app_id: string = "a5a0688d-fba4-4bb5-8cf2-e50143e6b4f8";
  firebase_id:string = "677592847633";

  constructor(private loginProvider: LoginApiProvider, private menuCtrl: MenuController, private loadingCtrl: LoadingController, private router:Router,  private oneSignal: OneSignal,  public alertCtrl: AlertController) {
    this.menuCtrl.enable(false);
    this.User = UserModel;
    this.Cred = CredModel;

    this.User.password = '243866';
   
  }

  ionViewDidEnter(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }

  logForm = async function()
  {
    let loading = await this.loadingCtrl.create({
      spinner: 'dots',
      dismissOnPageChange: true,
      enableBackdropDismiss: true,
      animated: true,
      translucent: true
    });

    await loading.present();

    this.loginProvider.login(this.User).subscribe(res =>{
      this.Cred = res;
      //console.log(this.Cred.access_token);
      localStorage.setItem('token', this.Cred.access_token);
      loading.dismiss();
      this.LoginModel = res;
      this.oneSignalSubscription();
      this.router.navigate(['/home']);
      console.log("Success");
    }, err =>{
      loading.dismiss();
      console.log(err);
    });
    
  }

  oneSignalSubscription(){
    this.oneSignal.startInit(this.signal_app_id, this.firebase_id);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((res) => {
    // do something when notification is received
    console.log(res);
    });

    this.oneSignal.handleNotificationOpened().subscribe((res) => {
      // do something when a notification is opened
      console.log(res);
    });
    
    this.oneSignal.endInit();

    this.oneSignal.getIds().then((id)=>{
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

}
