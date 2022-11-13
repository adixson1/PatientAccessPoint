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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientInfoComponent,
    AppointmentComponent,
    DoctorInfoComponent,
    SicknessDiseaseInfoComponent,
    HomePageComponent
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
