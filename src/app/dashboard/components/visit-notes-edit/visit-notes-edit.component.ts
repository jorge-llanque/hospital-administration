import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VisitNotesService } from 'src/app/services/visit-notes/visit-notes.service';

@Component({
  selector: 'app-visit-notes-edit',
  templateUrl: './visit-notes-edit.component.html',
  styleUrls: ['./visit-notes-edit.component.scss']
})
export class VisitNotesEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private visitNotesService: VisitNotesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.visitNotesService.getVisitNote(this.id)
      .subscribe( visitNote => {
        this.form.patchValue(visitNote);
      });
    })
  }

  saveVisitNote(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const visitNote = this.form.value;
      this.visitNotesService.updateVisitNote(this.id, visitNote)
      .subscribe((newVisitNote) => {
        this.router.navigate(['./dashboard/visit-notes']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      patient: ['', [Validators.required]],
      doctor: ['', [Validators.required]],
      date: ['', [Validators.required]],
      details: ['', [Validators.required]]
    });
  }


  goBack(): void {
    this.location.back();
  }

}
