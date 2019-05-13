import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public httpClient: HttpClient) { }

  public semesterList(): Observable<IResult>{
    return this.httpClient.get<IResult>(`Home/GetSemesterList`);
  }

 
}
