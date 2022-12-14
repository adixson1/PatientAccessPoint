import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  @Input() firstName1: string = "";
  @Input() lastName1: string = "";
  @Input() email1: string = "";
  @Input() phoneNumber1: string = "";
  @Input() doctor1: string = "";
  @Input() reasonForVisit: string = "";
  @Input() symptoms: string = "";

  public mode = 'Add'; //default mode
  private id: any; //doctor ID
  private doctor: any;

  constructor(private _myService: DoctorService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')){
          this.mode = 'Edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');

           //request doctor info based on the id
          this._myService.getDoctor(this.id).subscribe(
              data => { 
                  //read data and assign to private variable doctor
                  this.doctor = data;
                  //populate the firstName and lastName on the page
                  //notice that this is done through the two-way bindings
                  this.firstName1 = this.doctor.firstName1;
                  this.lastName1 = this.doctor.lastName1;
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



  doctorInfoForm = new FormGroup({
    firstName1: new FormControl(''),
    lastName1: new FormControl(''),
    email1: new FormControl(''),
    phoneNumber1: new FormControl(''),
    doctor1: new FormControl(''),




  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.doctorInfoForm.value);
    if (this.mode == 'Add')
      this._myService .addDoctors(this.firstName1, this.lastName1, this.email1, this.reasonForVisit, this.symptoms,
        this.doctor, this.phoneNumber1);
    if (this.mode == 'Edit')
      this._myService.updateDoctor(this.id, this.firstName1, this.lastName1);
  }
}
