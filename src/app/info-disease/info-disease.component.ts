import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-info-disease',
  templateUrl: './info-disease.component.html',
  styleUrls: ['./info-disease.component.css']
})
export class InfoDiseaseComponent implements OnInit {

  public diseases: any;

  constructor(private _myService: DiseaseService) { }

  ngOnInit() {
    this.getDiseases();
  }

  getDiseases(){
    this._myService.getDiseases().subscribe(

      data=> { this.diseases= data},
      err=> console.error(err),
      () => console.log('finished loading')
    );
  
  }
  onDelete(diseaseId: string){
    this._myService.deleteDisease(diseaseId);
  }
}