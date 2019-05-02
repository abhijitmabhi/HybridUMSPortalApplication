import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
})
export class EmployeeHomePage implements OnInit {

  constructor(
    private pushNotification: PushNotificationService
    ) { }

  ngOnInit() {
    this.pushNotification.getPlayerID();
  }

}
