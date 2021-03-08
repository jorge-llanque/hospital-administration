import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpecialtiesService } from 'src/app/services/specialties/specialties.service';

@Component({
  selector: 'app-specialty-form',
  templateUrl: './specialty-form.component.html',
  styleUrls: ['./specialty-form.component.scss']
})
export class SpecialtyFormComponent implements OnInit {


  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private specialtiesService: SpecialtiesService,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveSpecialty(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const specialty = this.form.value;
      this.specialtiesService.createSpecialty(specialty)
      .subscribe((newSpecialty) => {
        this.router.navigate(['./dashboard/specialties']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  goBack(): void {
    this.location.back();
  }

}
