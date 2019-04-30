import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';
import { settings } from 'src/app/Core/settings/systemSettings';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  baseUrl: string = settings.baseUrl;
  constructor(public httpClient: HttpClient) { }
  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>(`${this.baseUrl}/api/Home/Schedule?fromDateTime=${fromDateTime}&tillDateTime=${tillDateTime}`);
  }
}
