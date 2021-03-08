import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VISITNOTES } from 'src/app/mocks/visit-notes';
import { VisitNote } from 'src/app/models/visit-note';

@Injectable({
  providedIn: 'root'
})
export class VisitNotesService {

  constructor() { }

  getVisitNotes(): Observable<VisitNote[]>{
    const visitNotes = of(VISITNOTES);
    return visitNotes;
  }

  getMyPatients(nameDoctor: string):VisitNote[]{
    let myPatients:VisitNote[]=[]
    VISITNOTES.forEach(elem => {
      if(elem.doctor == nameDoctor){
        myPatients.push(elem)
      }
    })
    return myPatients
  }

  getMyDoctors(namePatient: string):VisitNote[]{
    let myDoctors:VisitNote[]=[]
    VISITNOTES.forEach(elem => {
      if(elem.patient == namePatient){
        myDoctors.push(elem)
      }
    })
    return myDoctors
  }

  getVisitNote(id: number): Observable<VisitNote>{
    const index = VISITNOTES.findIndex(p => p.id == id)
    const visitNote = of(VISITNOTES[index]);
    return visitNote;
  }

  createVisitNote(visitNote: VisitNote): Observable<VisitNote[]>{
    VISITNOTES.push(visitNote);
    const visitNotes = of(VISITNOTES);
    return visitNotes;
  }


  updateVisitNote(id: number, changes: VisitNote): Observable<VisitNote>{
    const index = VISITNOTES.findIndex(p => p.id == id);
    VISITNOTES[index] = changes;
    const visitNote = of(VISITNOTES[index]);
    return visitNote;
  }

  deleteVisitNote(id: number): Observable<VisitNote[]> {
    const index = VISITNOTES.findIndex(p => p.id === id)
    if (index === -1) {
      throw new Error(`The visit-note with Id: ${id} does not exists`)
    }
    VISITNOTES.splice(index, 1)
    const visitNotes = of(VISITNOTES);
    return visitNotes;
  }

}
