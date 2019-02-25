import { UserModel, CredModel } from './loginModel';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from '@ionic/angular';
import { LoginApiProvider } from 'src/app/Services/login-api.service';
import { HomePage } from 'src/app/home/home.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  User: object;
  Cred: object;

  constructor(private navCtrl: NavController, private loginProvider: LoginApiProvider, private menuCtrl: MenuController, private loadingCtrl: LoadingController, private router:Router) {
    this.menuCtrl.enable(false);
    this.User = UserModel;
    this.Cred = CredModel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  logForm = function()
  {

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      // content: 'Loading Please Wait...',
      dismissOnPageChange: true,
      enableBackdropDismiss: true
    });

    // loading.present();

    this.loginProvider.login(this.User).subscribe(res =>{
      this.Cred = res;
      console.log(this.Cred.access_token);
      // loading.dismiss();
      this.LoginModel = res;
      this.router.navigate(['/home']);
      // this.navCtrl.setRoot(HomePage);
      console.log("Success");
    }, err =>{
      // loading.dismiss();
      console.log(err);
    });
  }


}
