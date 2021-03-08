import { Component, OnInit, ViewChild } from '@angular/core';
import { DOCTORS } from 'src/app/mocks/doctors';
import { Doctor } from 'src/app/models/doctor';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'lastname', 'address', 'info', 'update', 'remove'];
  dataSource: MatTableDataSource<Doctor>;

doctors = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private doctorsService: DoctorsService,
    private _snackBar: MatSnackBar
  ) {
    this.fetchDoctors()
    this.dataSource = new MatTableDataSource(this.doctors)
    }

  ngOnInit(): void {
  }

  fetchDoctors(){
    this.doctorsService.getDoctors()
    .subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  deleteDoctor(id: number){
    // Not implemented
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
