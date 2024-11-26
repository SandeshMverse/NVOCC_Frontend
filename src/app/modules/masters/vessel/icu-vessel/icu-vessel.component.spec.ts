import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuVesselComponent } from './icu-vessel.component';

describe('IcuVesselComponent', () => {
  let component: IcuVesselComponent;
  let fixture: ComponentFixture<IcuVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuVesselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
