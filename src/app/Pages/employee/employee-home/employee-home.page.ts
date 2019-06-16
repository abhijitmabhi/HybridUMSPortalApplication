import { LoadingService } from 'src/app/core/loader/loading.service';
import { AlertService } from 'src/app/Core/alert/alert.service';
import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmployeeHomeService } from 'src/app/Services/employee/employee-home.service';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
})
export class EmployeeHomePage implements OnInit {
  public schedule: any;
  userInfo: any;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  constructor(
    private loginProvider: LoginApiProvider,
    private pushNotification: PushNotificationService,
    private datePipe: DatePipe,
    private loadingService: LoadingService,
    private employeeHomeService: EmployeeHomeService,
    private alertService: AlertService,
    ) { }

  ngOnInit() {
    this.pushNotification.getPlayerID();
    this.getCurrentUserInfo();
    this.getSchedule();
  }

  private currentDateTime = new Date();
  private fromDateTime = this.datePipe.transform(this.currentDateTime,'yyyy-MM-dd HH:mm:ss.SSS');
  private tillDateTime = this.datePipe.transform(this.currentDateTime.setDate(this.currentDateTime.getDate()+5),'yyyy-MM-dd HH:mm:ss.SSS');

  getSchedule() {
    this.loadingService.loadingStart();
    this.employeeHomeService.schedule(this.fromDateTime, this.tillDateTime).subscribe(res => {
      this.loadingService.loadingDismiss();
      this.schedule = res.Data
      this.schedule.forEach(element => {
        if (element.Classes.length === 0) {
          element.Classes.push({ ID: 0, SectionID: 0, SectionDescription: "No class on this day", Room: "", Time: "" });
        }
      });
    },
    err => {
      this.loadingService.loadingDismiss();
      this.alertService.alertError("Something went wrong");
    });
  }
  
  getCurrentUserInfo(){
    this.loginProvider.currentUserInfo().subscribe(res => {
      this.userInfo = res.Data;
    })
  }
}
