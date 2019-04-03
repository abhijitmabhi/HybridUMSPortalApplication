
import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { ProfileModel } from './profileModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: ProfileModel;

  constructor(
    private profileApiService: ProfileApiService) {
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.profileApiService.getStudentProfile().subscribe(res => {
      this.profile = res.Data;
      console.log(this.profile);
      return res;
    });
  }

}
