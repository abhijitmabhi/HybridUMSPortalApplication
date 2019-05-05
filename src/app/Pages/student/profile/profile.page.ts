import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
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
    private alertService: AlertService,
    private routerExtService: RouterExtServiceService,
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
      this.alertService.alertError("Something went wrong");
    });
  }

  public goToPrevious(): void {
    let previous = this.routerExtService.getPreviousUrl();
    console.log(`Previous URL in profile: ${previous}`);

    // if(previous)
    //   this.routerExtService.router.navigateByUrl(previous);
  }
}

