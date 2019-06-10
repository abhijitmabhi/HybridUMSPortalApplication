import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router:Router,
    private pushNotification: PushNotificationService,) { 
    
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.logMeOut();
  }

  logMeOut(){
    localStorage.clear();
    this.pushNotification.unsubscribeFromNotification();
    this.router.navigate(['']);
  }

}
