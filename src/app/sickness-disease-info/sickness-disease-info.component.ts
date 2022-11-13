import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-sickness-disease-info',
  templateUrl: './sickness-disease-info.component.html',
  styleUrls: ['./sickness-disease-info.component.css']
})
export class SicknessDiseaseInfoComponent implements OnInit {

  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() dob: string = "";
  @Input() Asthma: string = "";
  @Input() Migrane: string = "";
  @Input() Pregnancy: string = "";
  @Input() HeartDisease: string = "";
  @Input() BloodPressure: string = "";

  constructor(private _myService: DiseaseService) { }
  ngOnInit(): void {
  }
  SicknessDiseaseInfoForm = new FormGroup({
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
    this._myService.addDiseases(this.firstName,this.lastName,this.dob,this.Asthma,
      this.Migrane,this.Pregnancy,this.HeartDisease,this.BloodPressure)
  }
}