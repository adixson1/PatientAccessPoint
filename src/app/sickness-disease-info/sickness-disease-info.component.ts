import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sickness-disease-info',
  templateUrl: './sickness-disease-info.component.html',
  styleUrls: ['./sickness-disease-info.component.css']
})
export class SicknessDiseaseInfoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  SicknessDiseaseInfoForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
  });
  Conditions = new FormGroup({
    Asthma: new FormControl(''),
    Migrane: new FormControl(''),
    Pregnancy: new FormControl(''),
    HeartDisease: new FormControl(''),
    BloodPressure: new FormControl(''),
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.SicknessDiseaseInfoForm.value);
  }
}