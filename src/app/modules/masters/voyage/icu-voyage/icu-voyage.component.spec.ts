import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuVoyageComponent } from './icu-voyage.component';

describe('IcuVoyageComponent', () => {
  let component: IcuVoyageComponent;
  let fixture: ComponentFixture<IcuVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
