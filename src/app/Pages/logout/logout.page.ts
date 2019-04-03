import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.logMeOut();
  }

  logMeOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
