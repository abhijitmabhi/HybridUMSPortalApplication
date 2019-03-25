import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

      .set('grant_type','password')
      .set('username', '14-25773-1')
      .set('password','58446673');

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post('https://api.aiub.edu/ums-auth-api/Token', dt, { headers }).pipe(map(res =>{
     return res;
    }));
  }
}
