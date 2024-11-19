import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuPagesComponent } from './icu-pages.component';

describe('IcuPagesComponent', () => {
  let component: IcuPagesComponent;
  let fixture: ComponentFixture<IcuPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcuPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
