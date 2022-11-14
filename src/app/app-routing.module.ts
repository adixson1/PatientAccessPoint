import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { SicknessDiseaseInfoComponent } from './sickness-disease-info/sickness-disease-info.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';

const routes: Routes = [
  {path: 'appointment', component: AppointmentComponent},
  {path: 'doctor-info', component: DoctorInfoComponent},
  {path: 'patient-info', component:PatientInfoComponent},
  {path: 'sickness-disease-info', component:SicknessDiseaseInfoComponent},
  {path: '', component: HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
