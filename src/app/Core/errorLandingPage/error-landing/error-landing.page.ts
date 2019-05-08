import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-landing',
  templateUrl: './error-landing.page.html',
  styleUrls: ['./error-landing.page.scss'],
})
export class ErrorLandingPage implements OnInit {

  url : any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.url = localStorage.getItem('route');
  }

  onRefresh(){
    this.router.navigate([`/${this.url}`]);
  }

}
