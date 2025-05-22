import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BedService {
  readonly json_server_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getBeds(): Observable<[]> {
    return this.httpClient.get<[]>(`${this.json_server_url}/bed`);
  }

  getBed(bedId: number): Observable<Object> {
    return this.httpClient.get<Object>(`${this.json_server_url}/bed/${bedId}`);
  }

  createBed(bedData: any): Observable<Object> {
    return this.httpClient.post<Object>(`${this.json_server_url}/bed`, bedData);
  }

  updateBed(bedId: number, bedData: any): Observable<Object> {
    return this.httpClient.put<Object>(
      `${this.json_server_url}/bed/${bedId}`,
      bedData
    );
  }

  deleteBed(bedId: number): Observable<Object> {
    return this.httpClient.delete<Object>(
      `${this.json_server_url}/bed/${bedId}`
    );
  }
}
