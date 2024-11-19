import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuStateComponent } from './icu-state.component';

describe('IcuStateComponent', () => {
  let component: IcuStateComponent;
  let fixture: ComponentFixture<IcuStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
