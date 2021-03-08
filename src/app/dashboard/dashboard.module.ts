import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { SpecialtyFormComponent } from './components/specialty-form/specialty-form.component';
import { SpecialtyEditComponent } from './components/specialty-edit/specialty-edit.component';
import { VisitNotesComponent } from './components/visit-notes/visit-notes.component';
import { VisitNotesFormComponent } from './components/visit-notes-form/visit-notes-form.component';
import { VisitNotesEditComponent } from './components/visit-notes-edit/visit-notes-edit.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';



@NgModule({
  declarations: [
    NavComponent,
    DoctorsListComponent,
    PatientsListComponent,
    DoctorFormComponent,
    DoctorEditComponent,
    DoctorInfoComponent,
    SpecialtiesComponent,
    SpecialtyFormComponent,
    SpecialtyEditComponent,
    VisitNotesComponent,
    VisitNotesFormComponent,
    VisitNotesEditComponent,
    PatientFormComponent,
    PatientInfoComponent,
    PatientEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
