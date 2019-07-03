import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, AlertController, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  isShowLoginPage: any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Courses & Results',
      url: '/courses-results',
      icon: 'copy'
    },
    {
      title: 'Assesment',
      url: '/registration',
      icon: 'flash'
    }, 
    {
      title: 'Offered Courses',
      url: '/offered-courses',
      icon: 'book'
    },
    {
      title: 'Financials',
      url: '/financials',
      icon: 'logo-usd'
    },
    {
      title: 'Grades',
      url: '/grades',
      icon: 'ribbon'
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

  public appPagesEmployees = [
    {
      title: 'Home',
      url: '/employee-home',
      icon: 'home'
    },
    {
      title: 'Attendance',
      url: '/employee-attendance',
      icon: 'today'
    },
    {
      title: 'Profile',
      url: '/employee-profile',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp(); 
    this.menuCtrl.enable(false);
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      if (localStorage.getItem('token')) {
        let user_type = localStorage.getItem('userType');
        if(user_type == "3" || user_type == "1") {
          this.menuCtrl.enable(true, "employee");
          this.router.navigateByUrl('employee-home');
        }
        if(user_type == "0" ) {
          this.menuCtrl.enable(true, "student");
          this.router.navigateByUrl('home');
        }
      }
     
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
