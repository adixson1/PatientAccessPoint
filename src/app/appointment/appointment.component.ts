import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

 @Input() firstName: string= "";
@Input() lastName: string="";
@Input() dateOfBirth: string="";
@Input() appointmentDate: string="";
@Input() department: string="";
@Input() message: string="";

  constructor(private _myService: PatientService) { }

  ngOnInit(): void {
  }

appointmentForm= new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  dateOfBirth: new FormControl(''),
      appointmentDate: new FormGroup({
        date: new FormControl(''),
      }),
      selectDepartment: new FormGroup({
        department: new FormControl(''),
      }),
      selectDoctor: new FormGroup({
        Doctor: new FormControl(''),
      }),
      messageOptional: new FormGroup({
        message: new FormControl(''),
      })
});

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.appointmentForm.value);
  this._myService.addAppointments(this.firstName , this.lastName, this.dateOfBirth);
}
}
