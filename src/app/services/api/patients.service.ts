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
export class PatientsService {
  private readonly _json_server_url = environment.JSON_SERVER_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getPatients() {
    return this.httpClient.get(`${this._json_server_url}patient`);
  }

  getPatient(patientId: number) {
    return this.httpClient.get(`${this._json_server_url}patient/${patientId}`);
  }

  createPatient(patientData: any) {
    return this.httpClient.post(
      `${this._json_server_url}patient`,
      patientData
    );
  }

  updatePatient(patientId: number, patientData: any) {
    return this.httpClient.put(
      `${this._json_server_url}patient/${patientId}`,
      patientData
    );
  }

  deletePatient(patientId: number) {
    return this.httpClient.delete(
      `${this._json_server_url}patient/${patientId}`
    );
  }
}
