import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public httpClient: HttpClient) { }

  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>("http://172.16.22.101:4962/api/Home/Schedule?fromDateTime=" + fromDateTime + "&tillDateTime=" + tillDateTime);
  }
}
