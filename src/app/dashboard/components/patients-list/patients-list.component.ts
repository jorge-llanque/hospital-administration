import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PATIENTS } from 'src/app/mocks/patients';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {


  displayedColumns: string[] = ['number', 'name', 'lastname', 'address', 'info', 'update', 'remove'];
  dataSource: MatTableDataSource<Patient>;

  patients = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private patientsService: PatientsService,
    private _snackBar: MatSnackBar
  ) {
    this.fetchPatients()
    this.dataSource = new MatTableDataSource(this.patients)
  }

  ngOnInit(): void {
  }

  fetchPatients(){
    this.patientsService.getPatients()
    .subscribe(patients => {
      this.patients = patients;
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

  openSnackBar() {
    this._snackBar.open('Not Implemented','', {
      duration: 1000
    })
  }

}
