import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuLinerComponent } from './icu-liner.component';

describe('IcuLinerComponent', () => {
  let component: IcuLinerComponent;
  let fixture: ComponentFixture<IcuLinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuLinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuLinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
