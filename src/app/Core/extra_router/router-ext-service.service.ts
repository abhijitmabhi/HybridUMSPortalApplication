import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterExtServiceService {

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  private url : any = undefined;

  constructor(private router : Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.url = event;
      };
    });
  }

  public getPreviousUrl(){
    return this.url;
  }    
}
