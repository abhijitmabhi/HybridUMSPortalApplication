import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public httpClient: HttpClient) { }

  public semesterList(): Observable<IResult> {
    return this.httpClient.get<IResult>(`Student/GetSemesterList`);
  }

  public currentSemester(): Observable<IResult> {
    return this.httpClient.get<IResult>(`Common/GetCurrentSemester`);
  }

  public registeredCoursesBySemester(semesterId: number): Observable<IResult> {
    return this.httpClient.get<IResult>(`Student/GetCourseList?semesterID=${semesterId}`);
  }

  public getUserWarnings(): Observable<any> {
    return this.httpClient.get<any>('Common/GetUserWarnings');
  }

}
