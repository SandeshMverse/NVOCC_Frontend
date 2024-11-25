import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRateRequestComponent } from './special-rate-request.component';

describe('SpecialRateRequestComponent', () => {
  let component: SpecialRateRequestComponent;
  let fixture: ComponentFixture<SpecialRateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialRateRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialRateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
