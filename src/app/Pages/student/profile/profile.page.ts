import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
// import { ProfileModel } from './profileModel';
import { LoadingService } from 'src/app/core/loader/loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: object;

  constructor(
    private profileApiService: ProfileApiService,
    private loadingService: LoadingService) {
   }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.loadingService.loadingStart();
    this.profileApiService.getStudentProfile().subscribe(res => {
    this.loadingService.loadingDismiss();
    console.log(res);
    this.profile = res.Data;
    return res;
    });
  }
}
