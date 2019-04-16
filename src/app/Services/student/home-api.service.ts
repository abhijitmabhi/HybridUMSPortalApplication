import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public httpClient: HttpClient) { }

  private baseUrl = environment.baseUrl;

  public schedule(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/Home/Schedule?fromDateTime=2019-04-03 10:11:31.410&tillDateTime=2019-04-10 10:11:31.410");
  }
}
