import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})

export class EmployeeProfileService {

  constructor(public httpClient: HttpClient) { }
  public getEmployeeProfile(): Observable<IResult> {
    return this.httpClient.get<IResult>("http://172.16.22.101:4962/api/Employee/GetEmployeeProfile");
  }
}

