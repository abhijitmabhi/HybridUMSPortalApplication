import { LogoutPage } from './Pages/logout/logout.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Services/intercept/interceptor.service';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
