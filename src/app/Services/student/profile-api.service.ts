import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {
  
  constructor(public httpClient: HttpClient) { }
  public getStudentProfile(): Observable<IResult> {
    return this.httpClient.get<IResult>(`Home/GetStudentProfile`);
  }

  public getImage(): Observable<any> {
    return this.httpClient.get<any>(`Common/GetProfileImage`);
  }
}
