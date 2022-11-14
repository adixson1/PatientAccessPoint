import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  @Input() firstName: string = "";
  @Input() firstName1: string = "";
  @Input() lastName: string = "";
  @Input() lastName1: string = "";
  @Input() dob: string = "";
  @Input() phoneNumber: string = "";
  @Input() maritalStatus: string = "";
  @Input() street: string = "";
  @Input() city: string = "";
  @Input() zip: string = "";
  @Input() state: string = "";
  @Input() primaryInsurance: string = "";
  @Input() groupNumber: string = "";
  @Input() idNumber: string = "";
  @Input() socialSecurityNumber: string = "";
  @Input() relationship: string = "";

  public mode = 'Add';
  private id: any;
  private patient: any;

  constructor(private _myService: PatientService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')){
          this.mode = 'Edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');

           //request patient info based on the id
          this._myService.getPatient(this.id).subscribe(
              data => { 
                  //read data and assign to private variable patient
                  this.patient = data;
                  //populate the firstName and lastName on the page
                  //notice that this is done through the two-way bindings
                  this.firstName = this.patient.firstName;
                  this.lastName = this.patient.lastName;
              },
              err => console.error(err),
              () => console.log('finished loading')
          );
      } 
      else {
          this.mode = 'Add';
          this.id = null; 
      }
  });
}


  patientInfoForm = new FormGroup({
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
    if (this.mode == 'Add')
      this._myService.addPatients(this.firstName, this.lastName, this.dob, this.phoneNumber,
        this.maritalStatus, this.street, this.city, this.state, this.zip, this.primaryInsurance, this.groupNumber,
        this.idNumber, this.socialSecurityNumber);
    if (this.mode == 'Edit')
      this._myService.updatePatient(this.id, this.firstName, this.lastName);
  }
}
