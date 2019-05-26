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

  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  public schedule: any;
  playerID: any;
  semesterList: any;
  semesterData: any;

  nrSelect: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private homeApiService: HomeApiService,
    private commonService: CommonService,
    private loadingService: LoadingService,
    private datePipe: DatePipe,
    iconRegistry: MatIconRegistry,
    private pushNotification: PushNotificationService,
    private alertService: AlertService,
    sanitizer: DomSanitizer) {

    this.dashboard =
      {
        UserID: '16-31332-1',
        Semesters: [
          {
            ID: 1,
            Title: "2015-2016, Spring"
          },
          {
            ID: 2,
            Title: "2017-2018, Summer"
          }
        ],
        Courses: [
          {
            ID: '00359',
            Grade: 'A-',
            Marks: 86.00,
            Section: 'G',
            Status: 'Valid',
            Title: 'MATHEMATICAL METHODS OF ENGINEERING',
            SemesterID: '10'
          },
          {
            ID: '00017',
            Grade: 'A+',
            Marks: 99.00,
            Section: 'B',
            Status: 'Valid',
            Title: 'ADVANCED TOPICS IN PROGRAMMING III',
            SemesterID: '10'
          },
          {
            ID: '00310',
            Grade: 'A+',
            Marks: 96.00,
            Section: 'B',
            Status: 'Valid',
            Title: 'SOFTWARE REQUIREMENT ENGINEERING',
            SemesterID: '10'
          },
          {
            ID: '01972',
            Grade: 'A+',
            Marks: 94.00,
            Section: 'G4',
            Status: 'Valid',
            Title: 'SOFTWARE PROJECT II',
            SemesterID: '10'
          },
        ]
      };
    iconRegistry.addSvgIcon(
      'tsf',
      sanitizer.bypassSecurityTrustResourceUrl('src/assets/icon/tsf.svg'));
    iconRegistry.addSvgIcon(
      'notes',
      sanitizer.bypassSecurityTrustResourceUrl('src/assets/icon/notes.svg'));
    iconRegistry.addSvgIcon(
      'notice',
      sanitizer.bypassSecurityTrustResourceUrl('src/assets/icon/notice.svg'));
  }

  ngOnInit() {
    this.pushNotification.getPlayerID();
    this.getSemesterList();
    this.getSchedule();
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

}
