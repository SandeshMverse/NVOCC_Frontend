import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuLocationComponent } from './icu-location.component';

describe('IcuLocationComponent', () => {
  let component: IcuLocationComponent;
  let fixture: ComponentFixture<IcuLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
