import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { HomeApiService } from 'src/app/Services/student/home-api.service';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
    signal_app_id: string = "a5a0688d-fba4-4bb5-8cf2-e50143e6b4f8";
    firebase_id:string = "677592847633";
    constructor(
        private oneSignal: OneSignal,
        private homeAPIService : HomeApiService
    ) { }

    oneSignalSubscription(){
        this.oneSignal.startInit(this.signal_app_id, this.firebase_id);
    
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
        this.oneSignal.handleNotificationReceived().subscribe((res) => {
        // do something when notification is received
            console.log(res);
        });
    
        this.oneSignal.handleNotificationOpened().subscribe((res) => {
          // do something when a notification is opened
            console.log(res); 
        });
        
        this.oneSignal.endInit();  
    }

    getPlayerID(){
        this.oneSignal.getIds().then(obj => {
            //return obj.userId;
            this.homeAPIService.savePLayerIDIntoDatabase(obj.userId).subscribe(res => {
                console.log(res);
            });
        });
    }
}
