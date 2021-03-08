import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VisitNote } from 'src/app/models/visit-note';
import { VisitNotesService } from 'src/app/services/visit-notes/visit-notes.service';

@Component({
  selector: 'app-visit-notes',
  templateUrl: './visit-notes.component.html',
  styleUrls: ['./visit-notes.component.scss']
})
export class VisitNotesComponent implements OnInit {

  displayedColumns: string[] = ['number','date', 'patient', 'doctor','details', 'update', 'remove'];
  dataSource: MatTableDataSource<VisitNote>;

  visitNotes = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private visitNotesService: VisitNotesService,
    private _snackBar: MatSnackBar
  ) {
    this.fetchVisitNotes()
    this.dataSource = new MatTableDataSource(this.visitNotes)
  }

  ngOnInit(): void {
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

  deleteVisitNote(id: number){
    this.visitNotesService.deleteVisitNote(id)
    .subscribe(rta => {
      this.fetchVisitNotes();
    });
  }

  openSnackBar() {
    this._snackBar.open('Not Implemented','', {
      duration: 1000
    })
  }

}
