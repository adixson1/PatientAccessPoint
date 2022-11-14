import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-info-appointment',
  templateUrl: './info-appointment.component.html',
  styleUrls: ['./info-appointment.component.css']
})
export class InfoAppointmentComponent implements OnInit {
  public appointments: any;

  constructor(private _myService: AppointmentService) { }

  ngOnInit() {
    this.getAppointments();
  }
  //method called OnInit
  getAppointments() {
    this._myService.getAppointments().subscribe(
        //read data and assign to public variable Appointments
        data => { this.appointments = data},
        err => console.error(err),
        () => console.log('finished loading')
    );

  }  
  onDelete(appointmentId: string) {
    this._myService.deleteAppointment(appointmentId);
}

}
