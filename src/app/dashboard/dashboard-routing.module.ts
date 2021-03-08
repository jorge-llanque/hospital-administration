import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { NavComponent } from './components/nav/nav.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { SpecialtyEditComponent } from './components/specialty-edit/specialty-edit.component';
import { SpecialtyFormComponent } from './components/specialty-form/specialty-form.component';
import { VisitNotesEditComponent } from './components/visit-notes-edit/visit-notes-edit.component';
import { VisitNotesFormComponent } from './components/visit-notes-form/visit-notes-form.component';
import { VisitNotesComponent } from './components/visit-notes/visit-notes.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path:'',
        redirectTo: 'doctors',
        pathMatch: 'full'
      },
      {
        path: 'doctors',
        component: DoctorsListComponent
      },
      {
        path: 'patients',
        component: PatientsListComponent
      },
      {
        path: 'doctors/create',
        component: DoctorFormComponent
      },
      {
        path: 'patients/create',
        component: PatientFormComponent
      },
      {
        path: 'patients/edit/:id',
        component: PatientEditComponent
      },
      {
        path: 'doctors/edit/:id',
        component: DoctorEditComponent
      },
      {
        path: 'patients/info/:id',
        component: PatientInfoComponent
      },
      {
        path: 'doctors/info/:id',
        component: DoctorInfoComponent
      },
      {
        path: 'specialties',
        component: SpecialtiesComponent
      },
      {
        path: 'specialties/create',
        component: SpecialtyFormComponent
      },
      {
        path: 'specialties/edit/:id',
        component: SpecialtyEditComponent
      },
      {
        path: 'visit-notes',
        component: VisitNotesComponent
      },
      {
        path: 'visit-notes/create',
        component: VisitNotesFormComponent
      },
      {
        path: 'visit-notes/edit/:id',
        component: VisitNotesEditComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
