import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.page.html',
  styleUrls: ['./academic.page.scss'],
})
export class AcademicPage implements OnInit {

  constructor(private router: Router) { }

  goToCourses(){
    this.router.navigate(['courses-results']);
  }
  
  ngOnInit() {
  }

}
