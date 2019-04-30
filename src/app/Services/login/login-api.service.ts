import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';
import { settings } from 'src/app/Core/settings/systemSettings';

/*
  Generated class for the LoginApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class LoginApiProvider {
  baseUrl = settings.baseUrl;


  constructor(public http: HttpClient) {
    
  }

  login(user) {
    const dt = new HttpParams()

      .set('grant_type','password')
      .set('username', user.username)
      .set('password', user.password);

    return this.http.post('http://172.16.22.101:2694/Token', dt).pipe(map(res =>{
      return res;
     }));
  }

  usergetCurrentUserInfo(): Observable<IResult>{
    return this.http.get<IResult>(`${this.baseUrl}/api/Common/GetCurrentUserInfo`);
  }

  savePLayerIDIntoDatabase(PlayerID){
    const dt = new HttpParams()
      .set('playerId', PlayerID);

    return this.http.post(`${this.baseUrl}/api/Notification/MapPlayerId`, dt).pipe(map(res =>{
        return res;
    }));
  }
}
