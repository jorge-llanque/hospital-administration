import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpecialtiesService } from 'src/app/services/specialties/specialties.service';

@Component({
  selector: 'app-specialty-edit',
  templateUrl: './specialty-edit.component.html',
  styleUrls: ['./specialty-edit.component.scss']
})
export class SpecialtyEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private specialtiesService: SpecialtiesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.specialtiesService.getSpecialty(this.id)
      .subscribe( specialty => {
        this.form.patchValue(specialty);
      });
    })
  }

  saveSpecialty(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const specialty = this.form.value;
      this.specialtiesService.updateSpecialty(this.id, specialty)
      .subscribe((newSpecialty) => {
        this.router.navigate(['./dashboard/specialties']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  goBack(): void {
    this.location.back();
  }

}
