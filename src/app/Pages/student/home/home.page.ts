import { StudentClassScheduleService } from './../../../Services/student/student-class-schedule.service';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { AlertService } from 'src/app/Core/alert/alert.service';
import { PushNotificationService } from './../../../Core/oneSignal/push-notification.service';
import { DatePipe } from '@angular/common';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { HomeApiService } from 'src/app/Services/student/home-api.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Dashboard, Semester, Schedule } from './HomeModel';
import { Router } from '@angular/router';
import { LoginApiProvider } from 'src/app/Services/login/login-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { RouterExtServiceService } from 'src/app/Core/extra_router/router-ext-service.service';
import { CommonService } from 'src/app/Services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  panelOpenState = false;
  public isCollapsed = false;
  activeId = ['static-1', 'static-2'];

  dashboard: Dashboard;
  a: any;
  RegistrationHideFlag = true;
  ScheduleHideFlag = true;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  public schedule: any;
  playerID: any;
  semesterList: any;
  semesterData: any;

  nrSelect: any;
  invalidUserMessage: any;

  private userImage: string = null;
  private appUserInfo: any;
  private notificationCount: number;
  private classSchedules: any;


  constructor(
    private loginProvider: LoginApiProvider,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private homeApiService: HomeApiService,
    private commonService: CommonService,
    private loadingService: LoadingService,
    private datePipe: DatePipe,
    iconRegistry: MatIconRegistry,
    private pushNotification: PushNotificationService,
    private alertService: AlertService,
    sanitizer: DomSanitizer,
    private studentProfileService: ProfileApiService,
    private studentClassSceduleService: StudentClassScheduleService) {
  }

  ngOnInit() {
    this.pushNotification.getPlayerID();
    this.getSemesterList();
    // this.getSchedule();
    this.getClassSchedule();
    this.getCurrentUserInfo();
    this.getUserProfileImage();
  }

  private currentDateTime = new Date();
  private fromDateTime = this.datePipe.transform(this.currentDateTime, 'yyyy-MM-dd HH:mm:ss.SSS');
  private tillDateTime = this.datePipe.transform(this.currentDateTime.setDate(this.currentDateTime.getDate() + 4), 'yyyy-MM-dd HH:mm:ss.SSS');

  getSchedule() {
    this.loadingService.loadingStart();
    this.homeApiService.schedule(this.fromDateTime, this.tillDateTime).subscribe(res => {
      this.loadingService.loadingDismiss();
      this.schedule = res.Data;
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

  getSemesterList(){
    this.commonService.semesterList().subscribe(semesterLists => {
      this.semesterList = semesterLists.Data;
      this.commonService.currentSemester().subscribe(currentSemester => {
        let currentSemesterId = currentSemester.Data.ID;
        let isCurrentSemesterEnrolled = false;
        this.semesterList.forEach(semester => {
          if(semester.ID === currentSemesterId){
            isCurrentSemesterEnrolled = true;
          }
        });

        if(isCurrentSemesterEnrolled){
          this.nrSelect = currentSemesterId;
        }else {
          this.nrSelect = this.semesterList[0].ID;
        }
      })
    });
  }

  onChangeSemester(){
    this.commonService.registeredCoursesBySemester(this.nrSelect).subscribe(res => {
      this.semesterData = res.Data;
    });
  }

  getUserProfileImage() {
    this.studentProfileService.getImage().subscribe(response => {
      this.userImage = response;
    })
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

  getClassSchedule() {
    let fromDateTime = this.datePipe.transform(this.currentDateTime,'yyyy-MM-dd HH:mm:ss.SSS');
    let toDateTime = this.datePipe.transform(this.currentDateTime.setDate(this.currentDateTime.getDate()+1),'yyyy-MM-dd HH:mm:ss.SSS');

    this.loadingService.loadingStart();

    this.studentClassSceduleService.getStudentClassSchedule(fromDateTime, toDateTime).subscribe(response => {
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


  
}
