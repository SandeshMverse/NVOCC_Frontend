import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselComponent } from './vessel.component';

describe('VesselComponent', () => {
  let component: VesselComponent;
  let fixture: ComponentFixture<VesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
