import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDiseaseComponent } from './info-disease.component';

describe('InfoDiseaseComponent', () => {
  let component: InfoDiseaseComponent;
  let fixture: ComponentFixture<InfoDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDiseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
