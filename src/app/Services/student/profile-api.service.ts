import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IResult } from 'src/app/Core/result/result';
import { settings } from 'src/app/Core/settings/systemSettings';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {

  baseUrl = settings.baseUrl;
  constructor(public httpClient: HttpClient) { }

  public getStudentProfile(): Observable<IResult> {
    return this.httpClient.get<IResult>(`${this.baseUrl}/Home/GetStudentProfile`);
  }
}
