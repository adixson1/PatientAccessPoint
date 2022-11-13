import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

@Input() firstName: string="";
@Input() lastName: string="";
@Input() email: string="";
@Input() phoneNumber: string="";
@Input() doctor: string="";

  constructor(private _myService: PatientService) { }

  ngOnInit(): void {
  }

  doctorInfoForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
   doctor: new FormControl(''),
        
       
        
       
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.doctorInfoForm.value);
    this._myService.addDoctors(this.firstName,this.lastName, this.email);
  }
}
