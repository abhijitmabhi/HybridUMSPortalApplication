import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class OfferedCoursesService {

  constructor(public httpClient: HttpClient) { }

  public getOfferedCourses(): Observable<IResult> {
    return this.httpClient.get<IResult>(`Common/GetOfferedCoursesList`);
  }
}
