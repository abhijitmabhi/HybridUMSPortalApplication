import { LoadingService } from 'src/app/core/loader/loading.service';
import { RegistrationService } from './../../../Services/student/registration.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  semesterList: any;
  nrSelect: any;
  registrationData: any;

  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  constructor(
    private commonService: CommonService,
    private registrationService: RegistrationService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.getSemesterList();
  }

  getSemesterList() {
    this.commonService.semesterList().subscribe(semesterLists => {
      this.semesterList = semesterLists.Data;
      this.commonService.currentSemester().subscribe(currentSemester => {
        let currentSemesterId = currentSemester.Data.ID;
        let isCurrentSemesterEnrolled = false;
        this.semesterList.forEach(semester => {
          if (semester.ID === currentSemesterId) {
            isCurrentSemesterEnrolled = true;
          }
        });

        if (isCurrentSemesterEnrolled) {
          this.nrSelect = currentSemesterId;
        } else {
          this.nrSelect = this.semesterList[0].ID;
        }
      })
    })
  }

  onChangeSemester() {
    // this.loadingService.loadingStart();
    this.registrationService.getRegistrationDetails(this.nrSelect).subscribe(res => {
      // this.loadingService.loadingDismiss();
      this.registrationData = res.Data;
    })
  }


}
