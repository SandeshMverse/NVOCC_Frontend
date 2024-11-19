import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuRolePagePermissionComponent } from './icu-role-page-permission.component';

describe('IcuRolePagePermissionComponent', () => {
  let component: IcuRolePagePermissionComponent;
  let fixture: ComponentFixture<IcuRolePagePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuRolePagePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuRolePagePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
