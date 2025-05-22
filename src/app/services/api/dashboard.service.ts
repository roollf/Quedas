// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly json_server_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getDashboard(): Observable<[]> {
    return this.httpClient.get<[]>(`${this.json_server_url}/dashboard`);
  }
}
