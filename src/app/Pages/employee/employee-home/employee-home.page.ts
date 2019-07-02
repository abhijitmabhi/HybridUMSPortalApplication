import { CommonService } from './../../../Services/common/common.service';
import { EmployeeProfileService } from './../../../Services/employee/employee-profile.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { AlertService } from 'src/app/Core/alert/alert.service';
import { PushNotificationService } from 'src/app/Core/oneSignal/push-notification.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmployeeHomeService } from 'src/app/Services/employee/employee-home.service';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';
import { Router } from '@angular/router';
import { ClassScheduleService } from 'src/app/Services/employee/class-schedule.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
})

export class EmployeeHomePage implements OnInit {
  public schedule: any;
  userInfo: any;
  public userImage: string = null;
  private appUserInfo: any;
  private notificationCount: number;
  private announcements: any;
  private classSchedules: any;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  constructor(
    private router: Router,
    private profileService: EmployeeProfileService,
    private loginProvider: LoginApiProvider,
    private pushNotification: PushNotificationService,
    private datePipe: DatePipe,
    private loadingService: LoadingService,
    private employeeHomeService: EmployeeHomeService,
    private classSceduleService: ClassScheduleService,
    private commonService: CommonService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.pushNotification.getPlayerID();
    this.getUserWarningList();
    this.getClassSchedule();
    this.getCurrentUserInfo();
    this.getUserProfileImage();
  }

  private currentDateTime = new Date();
  // private fromDateTime = this.datePipe.transform(this.currentDateTime, 'yyyy-MM-dd HH:mm:ss.SSS');
  // private tillDateTime = this.datePipe.transform(this.currentDateTime.setDate(this.currentDateTime.getDate() + 5), 'yyyy-MM-dd HH:mm:ss.SSS');

  getClassSchedule() {
    let fromDateTime = this.datePipe.transform(this.currentDateTime,'yyyy-MM-dd HH:mm:ss.SSS');
    let toDateTime = this.datePipe.transform(this.currentDateTime.setDate(this.currentDateTime.getDate()+1),'yyyy-MM-dd HH:mm:ss.SSS');

    this.loadingService.loadingStart();

    this.classSceduleService.getTeacherClassSchedule(fromDateTime, toDateTime).subscribe(response => {
      this.loadingService.loadingDismiss();
      let result = response;
      if(result.HasError){
        console.log(result.Messages);
      }else{
        this.classSchedules = result.Data;
      }
    },
      error => {
        this.loadingService.loadingDismiss();
        let errorResponse = error;
        console.log(errorResponse.error.Message);
    });
  }

  getCurrentUserInfo() {
    this.loginProvider.currentUserInfo().subscribe(res => {
      let result = res;
      if(result.HasError){
        console.log(result.Messages);
      }else{
        this.appUserInfo = result.Data;
        this.notificationCount = this.appUserInfo.UnReadNotificationCount;
      }
    })
  }

  getUserProfileImage() {
    this.profileService.getImage().subscribe(response => {
      this.userImage = response;
    })
  }

  ShowProfile(){
    this.router.navigate(['/employee-profile']);
  }

  ShowClassSchedule(){
    this.router.navigate(['/employee-class-schedule']);
  }

  getUserWarningList() {
    this.commonService.getUserWarnings().subscribe(response => {
      if(response.HasError){
        console.log(response.Messages);
      }else{
        this.announcements = response.Data;
      }
    },
      error => {
        let errorResponse = error;
        console.log(errorResponse.error.Message);
    });
  }


}
