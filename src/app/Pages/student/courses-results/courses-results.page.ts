import { Component, OnInit } from '@angular/core';

export interface SelectSemester {
  value: any;
  viewValue: any;
}

export interface SelectCourse {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-courses-results',
  templateUrl: './courses-results.page.html',
  styleUrls: ['./courses-results.page.scss'],
})
export class CoursesResultsPage implements OnInit {
  midHideFlag  = true;
  finalHideFlag = true;
  constructor() { }

  semesters: SelectSemester[] = [
    {value: '2017-18, Spring', viewValue: '2017-18, Spring'},
    {value: '2017-18, Summer', viewValue: '2017-18, Summer'},
    {value: '2018-19, Fall', viewValue: '2018-19, Fall'},
    {value: '2017-18, Spring', viewValue: '2018-19, Spring'},
    {value: '2017-18, Summer', viewValue: '2018-19, Summer'}
  ];

  courses: SelectCourse[] = [
    {value: 'MATHEMATICAL METHODS OF ENGINEERING [G]', viewValue: 'MATHEMATICAL METHODS OF ENGINEERING [G]'},
    {value: 'ADVANCED TOPICS IN PROGRAMMING III [B]', viewValue: 'ADVANCED TOPICS IN PROGRAMMING III [B]'},
    {value: 'SOFTWARE REQUIREMENT ENGINEERING [B]', viewValue: 'SOFTWARE REQUIREMENT ENGINEERING [B]'},
    {value: 'SOFTWARE PROJECT II [G4]', viewValue: 'SOFTWARE PROJECT II [G4]'}
  ];

  onMidTerm = ()=>
  {
    this.midHideFlag = !this.midHideFlag;
  };

  onFinalTerm = ()=>
  {
    this.finalHideFlag = !this.finalHideFlag;
  };
  
  ngOnInit() {
  }

 
}
