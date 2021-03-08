import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientsService } from 'src/app/services/patients/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  default: "assets/images/perfil-default.jpg";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientsService: PatientsService,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  savePatient(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const patient = this.form.value;
      this.patientsService.createPatient(patient)
      .subscribe((newPatient) => {
        this.router.navigate(['./dashboard/patients']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
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
