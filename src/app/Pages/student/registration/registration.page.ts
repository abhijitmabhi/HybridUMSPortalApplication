import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  semesters: SelectSemester[] = [
    {value: '2017-18, Spring', viewValue: '2017-18, Spring'},
    {value: '2017-18, Summer', viewValue: '2017-18, Summer'},
    {value: '2018-19, Fall', viewValue: '2018-19, Fall'},
    {value: '2017-18, Spring', viewValue: '2018-19, Spring'},
    {value: '2017-18, Summer', viewValue: '2018-19, Summer'}
  ];
  
  ngOnInit() {
  }

}
