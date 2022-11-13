import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() dateOfBirth: string = "";
  @Input() appointmentDate: string = "";
  @Input() selectDepartment: string = "";
  @Input() selectDoctor: string="";
  @Input() messageOptional: string = "";

  constructor(private _myService: AppointmentService) { }

  ngOnInit(): void {
  }

  appointmentForm = new FormGroup({
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
    this._myService.addAppointments(this.firstName, this.lastName, this.dateOfBirth, this.appointmentDate,
      this.selectDepartment, this.selectDoctor, this.messageOptional);
  }
}
