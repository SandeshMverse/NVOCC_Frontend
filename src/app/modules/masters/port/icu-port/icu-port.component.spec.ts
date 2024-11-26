import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuPortComponent } from './icu-port.component';

describe('IcuPortComponent', () => {
  let component: IcuPortComponent;
  let fixture: ComponentFixture<IcuPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuPortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
