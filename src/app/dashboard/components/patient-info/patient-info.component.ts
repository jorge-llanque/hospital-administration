import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { VisitNote } from 'src/app/models/visit-note';
import { PatientsService } from 'src/app/services/patients/patients.service';
import { VisitNotesService } from 'src/app/services/visit-notes/visit-notes.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  form: FormGroup;
  id: number;
  patient: Patient;
  visitNotes = [];
  myDoctors: VisitNote[];

  displayedColumns: string[] = ['number', 'doctor', 'date', 'details'];
  dataSource: MatTableDataSource<Patient>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private activateRoute: ActivatedRoute,
    private patientsService: PatientsService,
    private visitNotesService: VisitNotesService
  ) {
    this.fetchVisitNotes()
    this.getDoctors()
    this.dataSource = new MatTableDataSource(this.visitNotes)
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.patientsService.getPatient(this.id)
      .subscribe( patient => {
        this.patient = patient;
      });
    })
  }

  getDoctors(){
    this.myDoctors = this.visitNotesService.getMyDoctors('Joe')
  }

  fetchVisitNotes(){
    this.visitNotesService.getVisitNotes()
    .subscribe(visitNotes => {
      this.visitNotes = visitNotes;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
