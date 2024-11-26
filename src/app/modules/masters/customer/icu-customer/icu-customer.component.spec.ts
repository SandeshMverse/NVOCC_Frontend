import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuCustomerComponent } from './icu-customer.component';

describe('IcuCustomerComponent', () => {
  let component: IcuCustomerComponent;
  let fixture: ComponentFixture<IcuCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
