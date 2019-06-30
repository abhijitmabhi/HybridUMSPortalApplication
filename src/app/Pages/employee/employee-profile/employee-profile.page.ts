import { AlertService } from 'src/app/Core/alert/alert.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from 'src/app/Services/employee/employee-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployeeProfilePage implements OnInit {

  public employeeProfile: any;
  public errorMsg: any;
  public userImage: string = null;
  public currentview: string;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  
  constructor(
    private router: Router,
    private profileService: EmployeeProfileService,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.currentview = "office";
    this.getProfile();
    this.getUserProfileImage();
  }

  /* Navigation */

  showOfficeView() {
    this.currentview = "office";
  }

  showPersonalView() {
    this.currentview = "personal";
  }

  GoToHome(){
    this.router.navigate(['/employee/Tabs/Home']);
  }

  viewChanged(segmentEvent) {
    let event = JSON.stringify(segmentEvent);
    this.currentview = "personal";
  }

  getProfile() {
    this.loadingService.loadingStart();
    this.profileService.getEmployeeProfile().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.employeeProfile = res.Data;
    },
      error => {
        this.loadingService.loadingDismiss();
        this.alertService.alertError("Something went wrong");
      });
  }

  getUserProfileImage() {
    this.profileService.getImage().subscribe(res => {
      this.userImage = res;
    })
  }

  doRefresh(event){
    this.getProfile();
    this.getUserProfileImage();
    event.target.complete();
  }
}