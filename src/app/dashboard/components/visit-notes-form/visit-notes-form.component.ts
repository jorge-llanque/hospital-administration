import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VisitNotesService } from 'src/app/services/visit-notes/visit-notes.service';

@Component({
  selector: 'app-visit-notes-form',
  templateUrl: './visit-notes-form.component.html',
  styleUrls: ['./visit-notes-form.component.scss']
})
export class VisitNotesFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private visitNotesService: VisitNotesService,
    private location: Location
  ) {
    this.buildForm();

  }

  ngOnInit(): void {
  }

  saveVisitNote(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const visitNote = this.form.value;
      this.visitNotesService.createVisitNote(visitNote)
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
