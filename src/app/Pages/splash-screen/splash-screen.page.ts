import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  lottieConfig:any;
  constructor(private router: Router) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
      path: 'assets/register_successful.json',
      autoplay: true,
      loop: true
    }
   }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
  }, 3000);
  }

}
