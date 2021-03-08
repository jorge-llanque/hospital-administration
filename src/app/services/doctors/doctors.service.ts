import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DOCTORS } from 'src/app/mocks/doctors';
import { Doctor } from 'src/app/models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor() { }

  getDoctors(): Observable<Doctor[]>{
    const doctors = of(DOCTORS);
    return doctors;
  }

  getDoctor(id: number): Observable<Doctor>{
    const index = DOCTORS.findIndex(p => p.id == id)
    const doctor = of(DOCTORS[index]);
    return doctor;
  }

  createDoctor(doctor: Doctor): Observable<Doctor[]>{
    DOCTORS.push(doctor);
    const doctors = of(DOCTORS);
    return doctors;
  }

  updateDoctor(id: number, changes: Doctor): Observable<Doctor>{
    const index = DOCTORS.findIndex(p => p.id == id);
    DOCTORS[index] = changes;
    const doctor = of(DOCTORS[index]);
    return doctor;
  }

  deleteDoctor(id: number):void {
    const index = DOCTORS.findIndex(p => p.id === id)
    if (index === -1) {
      throw new Error(`The specialty with Id: ${id} does not exists`)
    }
    DOCTORS.splice(index, 1)
  }
}
