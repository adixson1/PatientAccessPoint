import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { SicknessDiseaseInfoComponent } from './sickness-disease-info/sickness-disease-info.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPatientComponent } from './info-patient/info-patient.component';
import { InfoDoctorComponent } from './info-doctor/info-doctor.component';
import { InfoDiseaseComponent } from './info-disease/info-disease.component';
import { InfoAppointmentComponent } from './info-appointment/info-appointment.component';

const routes: Routes = [
  {path: 'appointment', component: AppointmentComponent},
  {path: 'editappointment/:_id', component: AppointmentComponent},
  {path: 'doctor-info', component: DoctorInfoComponent},
  {path: 'editdoctor/:_id', component: DoctorInfoComponent},
  {path: 'patient-info', component:PatientInfoComponent},
  {path: 'editpatient/:_id', component:PatientInfoComponent},
  {path: 'sickness-disease-info', component:SicknessDiseaseInfoComponent},
  {path: 'editdisease/:_id', component:SicknessDiseaseInfoComponent},
  {path: '', component: HomePageComponent},
  {path: 'info-patients', component: InfoPatientComponent},
  {path: 'info-doctors', component:InfoDoctorComponent},
  {path: 'info-diseases', component:InfoDiseaseComponent},
  {path: 'info-appointments', component:InfoAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
