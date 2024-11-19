import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuCityComponent } from './icu-city.component';

describe('IcuCityComponent', () => {
  let component: IcuCityComponent;
  let fixture: ComponentFixture<IcuCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
