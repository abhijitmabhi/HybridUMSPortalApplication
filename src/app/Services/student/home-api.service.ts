import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/Core/result/result';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  constructor(public httpClient: HttpClient) { }

  public schedule(fromDateTime: string, tillDateTime: string): Observable<IResult> {
    return this.httpClient.get<IResult>(`Home/Schedule?fromDateTime=${fromDateTime}&tillDateTime=${tillDateTime}`);
  }

  public savePLayerIDIntoDatabase(PlayerID){
    const dt = new HttpParams().set('playerId', PlayerID);
    console.log(dt);
    // return this.httpClient.post("http://172.16.22.101:1374/api/Notification/MapPlayerId", dt ).pipe(map(res =>{
    //   console.log("adadad " + res);
    //     return res;
    // }));
    return this.httpClient.post(`Notification/MapPlayerId`, dt);
  }

  public semesterList(): Observable<IResult>{
    return this.httpClient.get<IResult>(`Home/GetSemesterList`);
  }

  public registeredCoursesBySemester(semesterId: number): Observable<IResult>{
    return this.httpClient.get<IResult>(`Home/GetCourseList?semesterID=${semesterId}`);
  }

  public currentSemester(): Observable<IResult >{
    return this.httpClient.get<IResult>(`Common/GetCurrentSemester`);

  }
}
