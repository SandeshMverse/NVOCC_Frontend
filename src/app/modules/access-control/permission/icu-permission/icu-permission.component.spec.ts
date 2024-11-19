import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuPermissionComponent } from './icu-permission.component';

describe('IcuPermissionComponent', () => {
  let component: IcuPermissionComponent;
  let fixture: ComponentFixture<IcuPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
