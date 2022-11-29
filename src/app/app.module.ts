import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from 'src/app/patient.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { SicknessDiseaseInfoComponent } from './sickness-disease-info/sickness-disease-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorService } from './doctor.service';
import { AppointmentService } from './appointment.service';
import { DiseaseService } from './disease.service';
import { InfoPatientComponent } from './info-patient/info-patient.component';
import { InfoDoctorComponent } from './info-doctor/info-doctor.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { InfoAppointmentComponent } from './info-appointment/info-appointment.component';
import { InfoDiseaseComponent } from './info-disease/info-disease.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideoSearchComponent } from './video-search/video-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientInfoComponent,
    AppointmentComponent,
    DoctorInfoComponent,
    SicknessDiseaseInfoComponent,
    HomePageComponent,
    InfoPatientComponent,
    InfoDoctorComponent,
    AllPatientsComponent,
    InfoAppointmentComponent,
    InfoDiseaseComponent,
    NotFoundComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [PatientService, DoctorService, AppointmentService, DiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
