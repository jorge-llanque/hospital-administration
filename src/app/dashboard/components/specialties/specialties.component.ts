import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Specialty } from 'src/app/models/specialty';
import { SpecialtiesService } from 'src/app/services/specialties/specialties.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {

  displayedColumns: string[] = ['number', 'image', 'title', 'description', 'update', 'remove'];
  dataSource: MatTableDataSource<Specialty>;

  specialties = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private specialtiesService: SpecialtiesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.fetchSpecialties()
    this.dataSource = new MatTableDataSource(this.specialties)
  }

  ngOnInit(): void {
  }

  fetchSpecialties(){
    this.specialtiesService.getSpecialties()
    .subscribe(specialties => {
      this.specialties = specialties;
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

  deleteSpecialty(id: number){
    this.specialtiesService.deleteSpecialty(id)
    .subscribe(rta => {
      this.fetchSpecialties();
    });
  }

  openSnackBar() {
    this._snackBar.open('Not Implemented','', {
      duration: 1000
    })
  }

}
