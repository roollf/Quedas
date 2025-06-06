// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// environments
import { environment } from '../../../environments/environment';

// models
import * as Models from '../../@shared/models/';

@Injectable({
  providedIn: 'root',
})
export class PatientProfileService {
  private readonly _json_server_url = environment.JSON_SERVER_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getPatientProfile$(
    patientId: Models.PatientProfile['patient_id']
  ): Observable<Models.PatientProfile> {
    return this.httpClient.get<Models.PatientProfile>(
      `${this._json_server_url}patient_profile/${patientId}`
    );
  }
}
