import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuRoleComponent } from './icu-role.component';

describe('IcuRoleComponent', () => {
  let component: IcuRoleComponent;
  let fixture: ComponentFixture<IcuRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
