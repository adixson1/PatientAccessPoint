import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {

public patients: any;

  constructor(private _myService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }
  //method called OnInit
  getPatients() {
    this._myService.getPatients().subscribe(
        //read data and assign to public variable Patients
        data => { this.patients = data},
        err => console.error(err),
        () => console.log('finished loading')
    );

  }  
  onDelete(patientId: string) {
    this._myService.deletePatient(patientId);
}

}
