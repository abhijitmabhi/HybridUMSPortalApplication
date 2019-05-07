import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';
import { settings } from 'src/app/Core/settings/systemSettings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  baseUrl: string = settings.baseUrl;
  constructor(public httpClient: HttpClient) { }

  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>(`${this.baseUrl}/Home/Schedule?fromDateTime=${fromDateTime}&tillDateTime=${tillDateTime}`);
  }


  public savePLayerIDIntoDatabase(PlayerID){
    console.log("I am Here " + JSON.stringify(PlayerID) );
    // const dt = new HttpParams().set('playerId', '456446');
    const dt = new HttpParams().set('playerId', PlayerID);

      // http://172.16.22.101:1374/api/Notification/MapPlayerId?playerId=c359f7f1-5c48-40d5-b3ff-fc69500b16ec
    console.log(dt);

    // return this.httpClient.post("http://172.16.22.101:1374/api/Notification/MapPlayerId", dt ).pipe(map(res =>{
    //   console.log("adadad " + res);
    //     return res;
    // }));

    return this.httpClient.post(`${this.baseUrl}/Notification/MapPlayerId`, dt);
  }

  public semesterList(): Observable<IResult>{
    return this.httpClient.get<IResult>(`${this.baseUrl}/Home/GetSemesterList`);
  }

  public RegisteredCoursesBySemester(semesterId: number): Observable<IResult>{
    return this.httpClient.get<IResult>(`${this.baseUrl}/Home/GetCourseList?semesterID=${semesterId}`);
  }
}
