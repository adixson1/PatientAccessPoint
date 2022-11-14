import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

@Input() firstName1: string="";
@Input() lastName1: string="";
@Input() email1: string="";
@Input() phoneNumber1: string="";
@Input() doctor1: string="";
@Input() reasonForVisit: string="";
@Input() symptoms: string="";
@Input() doctor: string="";

  constructor(private _myService: DoctorService) { }

  ngOnInit(): void {
  }

  doctorInfoForm= new FormGroup({
    firstName1: new FormControl(''),
    lastName1: new FormControl(''),
    email1: new FormControl(''),
    phoneNumber1: new FormControl(''),
   doctor1: new FormControl(''),
        
       
        
       
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.doctorInfoForm.value);
    this._myService.addDoctors(this.firstName1,this.lastName1, this.email1, this.reasonForVisit, this.symptoms, this.doctor, this.phoneNumber1);
  }
}
