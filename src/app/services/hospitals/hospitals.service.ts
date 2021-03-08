import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HOSPITALS } from 'src/app/mocks/hospitals';
import { Hospital } from 'src/app/models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor() { }

  getHospitals(): Observable<Hospital[]>{
    const hospitals = of(HOSPITALS);
    return hospitals;
  }

  getHospital(id: number): Observable<Hospital>{
    const index = HOSPITALS.findIndex(p => p.id == id)
    const hospital = of(HOSPITALS[index]);
    return hospital;
  }

  createHospital(hospital: Hospital): Observable<Hospital[]>{
    HOSPITALS.push(hospital);
    const hospitals = of(HOSPITALS);
    return hospitals;
  }

  updateHospital(id: number, changes: Hospital): Observable<Hospital>{
    const index = HOSPITALS.findIndex(p => p.id == id);
    HOSPITALS[index] = changes;
    const hospital = of(HOSPITALS[index]);
    return hospital;
  }

}
