import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Specialty } from 'src/app/models/specialty';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss']
})
export class DoctorEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location

  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.doctorsService.getDoctor(this.id)
      .subscribe( doctor => {
        this.form.patchValue(doctor);
      });
    })
  }

  saveDoctor(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const doctor = this.form.value;
      this.doctorsService.updateDoctor(this.id, doctor)
      .subscribe((newDoctor) => {
        this.router.navigate(['./dashboard/doctors']);
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
