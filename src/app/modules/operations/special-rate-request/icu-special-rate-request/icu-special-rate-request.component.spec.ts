import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuSpecialRateRequestComponent } from './icu-special-rate-request.component';

describe('IcuSpecialRateRequestComponent', () => {
  let component: IcuSpecialRateRequestComponent;
  let fixture: ComponentFixture<IcuSpecialRateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuSpecialRateRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuSpecialRateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
