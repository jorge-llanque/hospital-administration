import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SPECIALTIES } from 'src/app/mocks/specialties';
import { Specialty } from 'src/app/models/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor() { }

  getSpecialties(): Observable<Specialty[]>{
    const specialties = of(SPECIALTIES);
    return specialties;
  }

  getSpecialty(id: number): Observable<Specialty>{
    const index = SPECIALTIES.findIndex(p => p.id == id)
    const specialty = of(SPECIALTIES[index]);
    return specialty;
  }

  createSpecialty(specialty: Specialty): Observable<Specialty[]>{
    SPECIALTIES.push(specialty);
    const specialties = of(SPECIALTIES);
    return specialties;
  }

  updateSpecialty(id: number, changes: Specialty): Observable<Specialty>{
    const index = SPECIALTIES.findIndex(p => p.id == id);
    SPECIALTIES[index] = changes;
    const specialty = of(SPECIALTIES[index]);
    return specialty;
  }

  deleteSpecialty(id: number): Observable<Specialty[]> {
    const index = SPECIALTIES.findIndex(p => p.id === id)
    if (index === -1) {
      throw new Error(`The specialty with Id: ${id} does not exists`)
    }
    SPECIALTIES.splice(index, 1)
    const specialties = of(SPECIALTIES);
    return specialties;
  }
}
