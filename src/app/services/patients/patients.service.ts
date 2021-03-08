import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PATIENTS } from 'src/app/mocks/patients';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  getPatients(): Observable<Patient[]>{
    const patients = of(PATIENTS);
    return patients;
  }

  getPatient(id: number): Observable<Patient>{
    const index = PATIENTS.findIndex(p => p.id == id)
    const patient = of(PATIENTS[index]);
    return patient;
  }

  createPatient(patient: Patient): Observable<Patient[]>{
    PATIENTS.push(patient);
    const patients = of(PATIENTS);
    return patients;
  }

  updatePatient(id: number, changes: Patient): Observable<Patient>{
    const index = PATIENTS.findIndex(p => p.id == id);
    PATIENTS[index] = changes;
    const patient = of(PATIENTS[index]);
    return patient;
  }
}
