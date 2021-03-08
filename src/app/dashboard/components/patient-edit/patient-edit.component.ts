import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients/patients.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private patientsService: PatientsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {
    this.buildForm();
    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.patientsService.getPatient(this.id)
      .subscribe( patient => {
        this.form.patchValue(patient);
      });
    })
  }

  savePatient(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const patient = this.form.value;
      this.patientsService.updatePatient(this.id, patient)
      .subscribe((newPatient) => {
        this.router.navigate(['./dashboard/patients']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      address: ['', [Validators.required]],
      image: ['']
    });
  }

  goBack(): void {
    this.location.back();
  }

}
