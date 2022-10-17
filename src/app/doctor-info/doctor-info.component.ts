import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor() { }

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
    console.warn(this.doctorInfoForm.value);
  }
}
