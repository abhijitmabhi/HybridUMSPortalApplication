import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProfileModel } from '../../Pages/student/profile/profileModel';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {
  
  constructor(public http: HttpClient) {}

  public getStudentProfile(): Observable<any>
  {
    return this.http.get<any>("http://172.16.22.101:4962/api/Home/GetStudentProfile");
  }
}
