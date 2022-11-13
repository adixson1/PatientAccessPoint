import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
@Input() firstName: string= "";
@Input() firstName1: string= "";
@Input() lastName: string="";
@Input() lastName1: string="";
@Input() dob: string="";
@Input() phoneNumber: string="";
@Input() maritalStatus: string="";
@Input() street: string="";
@Input() city: string="";
@Input() zip: string="";
@Input() state: string="";
@Input() primaryInsurance: string="";
@Input() groupNumber: string="";
@Input() idNumber: string="";
@Input() socialSecurityNumber: string="";
@Input() relationship: string="";


  constructor(private _myService: PatientService) { }

  ngOnInit(): void {
  }

  patientInfoForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    phoneNumber: new FormControl(''),
    maritalStatus: new FormControl(''),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl(''),
        }),
        insurance: new FormGroup({
          primaryInsurance: new FormControl(''),
          groupNumber: new FormControl(''),
          idNumber: new FormControl(''),
          socialSecurityNumber: new FormControl(''),
          relationship: new FormControl('')
        }),
        emergencyContact: new FormGroup({
          firstName2: new FormControl(''),
          lastName2: new FormControl(''),
          phoneNumber: new FormControl(''),
          relationshipToPatient: new FormControl('')
        })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.patientInfoForm.value);
    this._myService.addPatients(this.firstName , this.lastName, this.dob, this.phoneNumber,
      this.maritalStatus, this.street, this.city, this.state, this.zip, this.primaryInsurance, this.groupNumber,
      this.idNumber, this.socialSecurityNumber);
  }
}
