import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IResult } from 'src/app/Core/result/result';
import { settings } from 'src/app/Core/settings/systemSettings';

@Injectable({
  providedIn: 'root'
})

export class EmployeeProfileService {
  baseUrl: string = settings.baseUrl;
  constructor(public httpClient: HttpClient) { }
  public getEmployeeProfile(): Observable<IResult> {
    return this.httpClient.get<IResult>(`${this.baseUrl}/Employee/GetEmployeeProfile`);
  }

  public getImage(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/Common/GetProfileImage`);
  }
}

