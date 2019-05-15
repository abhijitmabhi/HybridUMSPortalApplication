import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public httpClient: HttpClient) { }

  public getRegistrationDetails(semesterId: number): Observable<IResult> {
    return this.httpClient.get<IResult>(`Student/GetRegistrationDetails?semesterId=${semesterId}`);
  }
}
