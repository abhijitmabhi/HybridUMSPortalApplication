import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/Core/alert/alert.service';
import { RouterExtServiceService } from 'src/app/Core/extra_router/router-ext-service.service';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: any;
  public errorMsg: any;

  constructor(
    private profileApiService: ProfileApiService,
    private loadingService: LoadingService,
    private alerService:AlertService,
    private routerExtService: RouterExtServiceService
    ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.loadingService.loadingStart();
    this.profileApiService.getStudentProfile().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.profile = res.Data;
    },
      error => {
        this.loadingService.loadingDismiss();
        this.alerService.alertError(error.statusText);
        this.errorMsg = error.statusText;
        setTimeout(()=>{this.goToPrevious()},0);
    });
  }

  public goToPrevious(): void {
    let previous = this.routerExtService.getPreviousUrl();
    console.log(`Previous URL in profile: ${previous}`);

    // if(previous)
    //   this.routerExtService.router.navigateByUrl(previous);
  }
}

