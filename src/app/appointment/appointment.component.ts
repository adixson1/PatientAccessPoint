import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  @Input() selectDoctor: string = "";
  @Input() messageOptional: string = "";

  public mode = 'Add'; //default mode
  private id: any; //Appointment ID
  private appointment: any;

  constructor(private _myService: AppointmentService, public route: ActivatedRoute) { }

  ngOnInit() {
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
    if (this.mode == 'Add')
      this._myService.addAppointments(this.firstName, this.lastName, this.dateOfBirth, this.appointmentDate,
        this.selectDepartment, this.selectDoctor, this.messageOptional);
    if (this.mode == 'Edit')
      this._myService.updateAppointment(this.id, this.firstName, this.lastName);
  }
}
