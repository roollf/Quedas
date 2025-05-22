import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  readonly json_server_url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getPatients() {
    return this.httpClient.get(`${this.json_server_url}/patient`);
  }

  getPatient(patientId: number) {
    return this.httpClient.get(`${this.json_server_url}/patient/${patientId}`);
  }

  createPatient(patientData: any) {
    return this.httpClient.post(`${this.json_server_url}/patient`, patientData);
  }

  updatePatient(patientId: number, patientData: any) {
    return this.httpClient.put(
      `${this.json_server_url}/patient/${patientId}`,
      patientData
    );
  }

  deletePatient(patientId: number) {
    return this.httpClient.delete(
      `${this.json_server_url}/patient/${patientId}`
    );
  }
}
