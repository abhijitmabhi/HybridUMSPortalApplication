import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common/common.service';

export interface SelectSemester {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  semesterList: any;
  nrSelect: any;

  constructor(private commonService: CommonService) { }

  semesters: SelectSemester[] = [
    {value: '2017-18, Spring', viewValue: '2017-18, Spring'},
    {value: '2017-18, Summer', viewValue: '2017-18, Summer'},
    {value: '2018-19, Fall', viewValue: '2018-19, Fall'},
    {value: '2017-18, Spring', viewValue: '2018-19, Spring'},
    {value: '2017-18, Summer', viewValue: '2018-19, Summer'}
  ];
  
  ngOnInit() {
    this.getSemesterList();
  }

  getSemesterList(){
    this.commonService.semesterList().subscribe(semesterLists => {
      this.semesterList = semesterLists.Data;
      console.log(this.semesterList);
    })
  }

  onChangeSemester(){
    
  }
  

}
