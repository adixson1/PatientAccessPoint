import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiseaseService } from '../disease.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  public mode='Add';
  private id: any;
  private disease: any;


  constructor(private _myService: DiseaseService, public route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id')){
            this.mode = 'Edit'; /*request had a parameter _id */ 
            this.id = paramMap.get('_id');

             //request disease info based on the id
            this._myService.getDisease(this.id).subscribe(
                data => { 
                    //read data and assign to private variable disease
                    this.disease = data;
                    //populate the firstName and lastName on the page
                    //notice that this is done through the two-way bindings
                    this.firstName = this.disease.firstName;
                    this.lastName = this.disease.lastName;
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

      if (this.mode == 'Add')
    this._myService.addDiseases(this.firstName,this.lastName,this.dob,this.Asthma,
      this.Migrane,this.Pregnancy,this.HeartDisease,this.BloodPressure);
if (this.mode == 'Edit')
    this._myService.updateDisease( this.id, this.firstName,this.lastName,this.dob,this.Asthma,
      this.Migrane,this.Pregnancy,this.HeartDisease,this.BloodPressure);
   }
}