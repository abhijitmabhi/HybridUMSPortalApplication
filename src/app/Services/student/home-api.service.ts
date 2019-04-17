import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public httpClient: HttpClient) { }

  private baseUrl = environment.baseUrl;

  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>(this.baseUrl + "/Home/Schedule?fromDateTime=" + fromDateTime + "&tillDateTime=" + tillDateTime);
  }
}
