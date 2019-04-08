import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public http: HttpClient) { }

  public schedule(): Observable<any> {
    return this.http.get<any>("http://172.16.22.101:4962/api/Home/Schedule?fromDateTime=2019-04-03 10:11:31.410&tillDateTime=2019-04-10 10:11:31.410");
  }
}
