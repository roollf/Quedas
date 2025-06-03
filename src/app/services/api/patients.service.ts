// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// environments
import { environment } from '../../../environments/environment';

// interfaces
import * as Models from '../../@shared/models';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly _json_server_url = environment.JSON_SERVER_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getPatients$(): Observable<Models.PatientData[]> {
    return this.httpClient.get<[]>(`${this._json_server_url}patient`);
  }

  getPatient$(patientId: number): Observable<Models.PatientData> {
    return this.httpClient.get<Models.PatientData>(
      `${this._json_server_url}patient/${patientId}`
    );
  }

  createPatient$(patientData: any): Observable<Models.PatientData> {
    return this.httpClient.post<Models.PatientData>(
      `${this._json_server_url}patient`,
      patientData
    );
  }

  updatePatient$(
    patientId: number,
    patientData: any
  ): Observable<Models.PatientData> {
    return this.httpClient.put<Models.PatientData>(
      `${this._json_server_url}patient/${patientId}`,
      patientData
    );
  }

  deletePatient$(patientId: number): Observable<Models.PatientData> {
    return this.httpClient.delete<Models.PatientData>(
      `${this._json_server_url}patient/${patientId}`
    );
  }
}
