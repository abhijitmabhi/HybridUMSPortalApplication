import { IResult } from './../../Core/result/result';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { settings } from 'src/app/Core/settings/systemSettings';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHomeService {

  baseUrl: string = settings.baseUrl;

  constructor(public httpClient: HttpClient) { }

  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>(`${this.baseUrl}/Employee/Schedule?fromDateTime=${fromDateTime}&tillDateTime=${tillDateTime}`);
  }

}
