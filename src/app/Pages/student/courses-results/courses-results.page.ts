import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-results',
  templateUrl: './courses-results.page.html',
  styleUrls: ['./courses-results.page.scss'],
})
export class CoursesResultsPage implements OnInit {
  midHideFlag  = true;
  finalHideFlag = true;
  constructor() { }
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
