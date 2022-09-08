import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _httpClient: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    let url: string = "http://localhost:9090/api/patients";
    return this._httpClient.get<Patient[]>(url).pipe(map(response => response));
  }  

  addPatient(patient: Patient): Observable<Patient> {
    let url: string = "http://localhost:9090/api/patients";
    return this._httpClient.post<Patient>(url, patient).pipe(map(response => response));
  }

  getPatient(id: number): Observable<Patient> {
    let url = "http://localhost:9090/api/patients/"+id;
    return this._httpClient.get<Patient>(url).pipe(map(response => response));
  }

  updatePatient(patient: Patient): Observable<Patient> {
    let url: string = "http://localhost:9090/api/patients/"+patient.id;
    return this._httpClient.put<Patient>(url, patient).pipe(map(response => response));
  }

  deletePatient(id: number): Observable<string> {
    let url = "http://localhost:9090/api/patients/"+id;
    return this._httpClient.delete<string>(url);
  }
}
