import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-info-doctor',
  templateUrl: './info-doctor.component.html',
  styleUrls: ['./info-doctor.component.css']
})
export class InfoDoctorComponent implements OnInit {
  public doctors: any;

  constructor(private _myService: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }
  //method called OnInit
  getDoctors() {
    this._myService.getDoctors().subscribe(
        //read data and assign to public variable Doctors
        data => { this.doctors = data},
        err => console.error(err),
        () => console.log('finished loading')
    );

  }  
  onDelete(doctorId: string) {
    this._myService.deleteDoctor(doctorId);
}

}
