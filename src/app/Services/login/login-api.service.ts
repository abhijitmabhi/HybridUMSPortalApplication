import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';
import { encode } from 'punycode';

/*
  Generated class for the LoginApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class LoginApiProvider {

  constructor(public http: HttpClient) {}

  login(user) {

    let formattedPassword = encodeURIComponent(user.password);

    const dt = new HttpParams()
      .set('grant_type','password')
      .set('username', user.username)
      .set('password', formattedPassword);

    // return this.http.post('http://172.16.22.101:41368/Token', dt ).pipe(map(res =>{
    //   return res;
    //  }));

     return this.http.post('http://172.16.22.101:2694/Token', dt ).pipe(map(res =>{
      return res;
     }));

    //  return this.http.post('https://testapi.aiub.edu/ums-auth-api/Token', dt).pipe(map(res =>{
    //   return res;
    //  }));
  }

  usergetCurrentUserInfo(): Observable<IResult>{
    return this.http.get<IResult>(`Common/GetCurrentUserInfo`);
  }
 
}
