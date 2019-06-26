import { AlertService } from 'src/app/Core/alert/alert.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from 'src/app/Services/employee/employee-profile.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployeeProfilePage implements OnInit {

  public profile: any;
  public errorMsg: any;
  public userImagePath: string = null;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  
  constructor(
    private profileService: EmployeeProfileService,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getUserProfileImage();
  }

  getProfile() {
    this.loadingService.loadingStart();
    this.profileService.getEmployeeProfile().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.profile = res.Data;
    },
      error => {
        this.loadingService.loadingDismiss();
        this.alertService.alertError("Something went wrong");
      });
  }

  getUserProfileImage() {
    this.profileService.getImage().subscribe(res => {
      this.userImagePath = res;
    })
  }
}