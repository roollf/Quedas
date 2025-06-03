// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// environments
import { environment } from '../../../environments/environment';

// interfaces
import * as Models from '../../@shared/models/';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly _json_server_url = environment.JSON_SERVER_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getDashboard$(): Observable<Models.DashboardData[]> {
    return this.httpClient.get<Models.DashboardData[]>(
      `${this._json_server_url}dashboard`
    );
  }
}
