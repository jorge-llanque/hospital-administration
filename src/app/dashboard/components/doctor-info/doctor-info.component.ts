import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { VisitNote } from 'src/app/models/visit-note';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { VisitNotesService } from 'src/app/services/visit-notes/visit-notes.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.scss']
})
export class DoctorInfoComponent implements OnInit {

  form: FormGroup;
  id: number;
  doctor: Doctor;
  visitNotes = [];
  myPatients: VisitNote[];

  displayedColumns: string[] = ['number', 'patient', 'date', 'details'];
  dataSource: MatTableDataSource<Doctor>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private activateRoute: ActivatedRoute,
    private doctorsService: DoctorsService,
    private visitNotesService: VisitNotesService
  ) {
    this.fetchVisitNotes()
    this.getPatients()
    this.dataSource = new MatTableDataSource(this.visitNotes)
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.doctorsService.getDoctor(this.id)
      .subscribe( doctor => {
        this.doctor = doctor;
      });
    })
  }

  getPatients(){
    this.myPatients = this.visitNotesService.getMyPatients('Joseph')
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
