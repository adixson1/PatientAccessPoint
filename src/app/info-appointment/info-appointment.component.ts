import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-appointment',
  templateUrl: './info-appointment.component.html',
  styleUrls: ['./info-appointment.component.css']
})
export class InfoAppointmentComponent implements OnInit {
  public appointments: any;
  public mode = 'Add'; //default mode
  private id: any; //appointment ID
  public appointment: any;
  @Input() firstName: string="";
  @Input() lastName: string="";

  constructor(private _myService: AppointmentService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getAppointments();
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')){
          this.mode = 'Edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');

           //request appointment info based on the id
          this._myService.getAppointment(this.id).subscribe(
              data => { 
                  //read data and assign to private variable appointment
                  this.appointment = data;
                  //populate the firstName and lastName on the page
                  //notice that this is done through the two-way bindings
                  this.firstName = this.appointment.firstName;
                  this.lastName = this.appointment.lastName;
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
