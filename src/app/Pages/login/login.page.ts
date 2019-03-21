import { UserModel, CredModel } from './loginModel';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from '@ionic/angular';
import { LoginApiProvider } from 'src/app/Services/login-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  User: object;
  Cred: object;

  constructor(private loginProvider: LoginApiProvider, private menuCtrl: MenuController, private loadingCtrl: LoadingController, private router:Router) {
    this.menuCtrl.enable(false);
    this.User = UserModel;
    this.Cred = CredModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


   logForm = async function()
  {

    let loading = await this.loadingCtrl.create({
      spinner: 'dots',
      // content: 'Loading Please Wait...',
      dismissOnPageChange: true,
      enableBackdropDismiss: true,
      animated: true,
      translucent: true
    });

    await loading.present();

    this.loginProvider.login(this.User).subscribe(res =>{
      this.Cred = res;
      //console.log(this.Cred.access_token);
      loading.dismiss();
      this.LoginModel = res;
      this.router.navigate(['/home']);
      console.log("Success");
    }, err =>{
      loading.dismiss();
      console.log(err);
    });
  }


}
