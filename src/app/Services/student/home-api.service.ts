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
    return this.httpClient.get<IResult>(`Student/Schedule?fromDateTime=${fromDateTime}&tillDateTime=${tillDateTime}`);
  }

  public savePLayerIDIntoDatabase(PlayerID){
    const dt = new HttpParams().set('playerId', PlayerID);
    return this.httpClient.post(`Notification/MapPlayerId`, dt);
  }
}
