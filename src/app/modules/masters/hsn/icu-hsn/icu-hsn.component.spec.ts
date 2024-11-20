import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuHsnComponent } from './icu-hsn.component';

describe('IcuHsnComponent', () => {
  let component: IcuHsnComponent;
  let fixture: ComponentFixture<IcuHsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuHsnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuHsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
