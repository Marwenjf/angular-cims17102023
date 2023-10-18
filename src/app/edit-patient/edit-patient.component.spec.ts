import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiPatientComponent } from './edi-patient.component';

describe('EdiPatientComponent', () => {
  let component: EdiPatientComponent;
  let fixture: ComponentFixture<EdiPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
