import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IResult } from 'src/app/Core/result/result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {

  constructor(public httpClient: HttpClient) { }

  private baseUrl = environment.baseUrl;

  public getStudentProfile(): Observable<IResult> {
    return this.httpClient.get<IResult>(this.baseUrl + "/Home/GetStudentProfile");
  }
}
