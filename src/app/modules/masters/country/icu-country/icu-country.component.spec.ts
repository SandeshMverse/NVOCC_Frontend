import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuCountryComponent } from './icu-country.component';

describe('IcuCountryComponent', () => {
  let component: IcuCountryComponent;
  let fixture: ComponentFixture<IcuCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
