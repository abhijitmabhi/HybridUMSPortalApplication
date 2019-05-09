import { Component, OnInit } from '@angular/core';

export interface SelectMonth {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.page.html',
  styleUrls: ['./employee-attendance.page.scss'],
})
export class EmployeeAttendancePage implements OnInit {

  // step = 0;

  constructor() { }

  months: SelectMonth[] = [
    {value: 'May, 2019', viewValue: 'May, 2019'},
    {value: 'April, 2019', viewValue: 'April, 2019'},
    {value: 'March, 2019', viewValue: 'March, 2019'},
    {value: 'February, 2019', viewValue: 'February, 2019'},
    {value: 'January, 2019', viewValue: 'January, 2019'}
  ];

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  ngOnInit() {
  }
}
