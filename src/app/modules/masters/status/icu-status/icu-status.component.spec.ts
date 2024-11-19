import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuStatusComponent } from './icu-status.component';

describe('IcuStatusComponent', () => {
  let component: IcuStatusComponent;
  let fixture: ComponentFixture<IcuStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
