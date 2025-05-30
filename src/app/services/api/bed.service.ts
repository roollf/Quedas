// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// environments
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BedService {
  private readonly _json_server_url = environment.JSON_SERVER_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getBeds(): Observable<[]> {
    return this.httpClient.get<[]>(`${this._json_server_url}bed`);
  }

  getBed(bedId: number): Observable<Object> {
    return this.httpClient.get<Object>(`${this._json_server_url}bed/${bedId}`);
  }

  createBed(bedData: any): Observable<Object> {
    return this.httpClient.post<Object>(
      `${this._json_server_url}bed`,
      bedData
    );
  }

  updateBed(bedId: number, bedData: any): Observable<Object> {
    return this.httpClient.put<Object>(
      `${this._json_server_url}bed/${bedId}`,
      bedData
    );
  }

  deleteBed(bedId: number): Observable<Object> {
    return this.httpClient.delete<Object>(
      `${this._json_server_url}bed/${bedId}`
    );
  }
}
