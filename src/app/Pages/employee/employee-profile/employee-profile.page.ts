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

  constructor(
    private profileService: EmployeeProfileService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.loadingService.loadingStart();
    this.profileService.getEmployeeProfile().subscribe(res => {
      console.log(res);
      this.loadingService.loadingDismiss();
      this.profile = res.Data;
    },
      error => {
        this.loadingService.loadingDismiss();
        this.errorMsg = error.statusText;
    });
  }


}
