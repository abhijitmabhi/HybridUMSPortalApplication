import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';

/*
  Generated class for the LoginApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class LoginApiProvider {
  baseUrl: string = '';


  constructor(public http: HttpClient) {
    
  }

  login(user) {
    const dt = new HttpParams()

      // .set('grant_type','password')
      // .set('username', '14-25773-1')
      // .set('password','58446673');

      .set('grant_type','password')
      .set('username', user.username)
      .set('password', user.password);

    // const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    // return this.http.post('https://api.aiub.edu/ums-auth-api/Token', dt, { headers }).pipe(map(res =>{
    //  return res;
    // }));

    return this.http.post('http://172.16.22.101:2694/Token', dt).pipe(map(res =>{
      return res;
     }));
  }

  usergetCurrentUserInfo(): Observable<IResult>{
    return this.http.get<IResult>("http://172.16.22.101:4962/api/Common/GetCurrentUserInfo");
  }

  savePLayerIDIntoDatabase(UserID, PlayerID){
    const dt = new HttpParams()
      .set('UserID', UserID)
      .set('PlayerID', PlayerID);

    return this.http.post('http://172.16.22.101:2694/Token', dt).pipe(map(res =>{
        return res;
    }));
  }
}
