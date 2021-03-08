import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  default: "assets/images/perfil-default.jpg";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private doctorsService: DoctorsService,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveDoctor(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const doctor = this.form.value;
      this.doctorsService.createDoctor(doctor)
      .subscribe((newProduct) => {
        this.router.navigate(['./dashboard/doctors']);
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
