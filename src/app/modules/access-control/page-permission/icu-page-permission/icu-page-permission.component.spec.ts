import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuPagePermissionComponent } from './icu-page-permission.component';

describe('IcuPagePermissionComponent', () => {
  let component: IcuPagePermissionComponent;
  let fixture: ComponentFixture<IcuPagePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuPagePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuPagePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
