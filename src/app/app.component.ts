import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title ='Patients App';
  //declare variable to hold response and make it public to be accessible from components.html
  public patients: any;
  //initialize the call using PatientService 
  constructor(private _myService: PatientService) { }
  ngOnInit() {
      this.getPatients();
  }
  //method called OnInit
  getPatients() {
      this._myService.getPatients().subscribe(
          //read data and assign to public variable Patients
          data => { this.patients = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }
}
