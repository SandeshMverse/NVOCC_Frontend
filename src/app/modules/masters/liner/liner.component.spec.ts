import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinerComponent } from './liner.component';

describe('LinerComponent', () => {
  let component: LinerComponent;
  let fixture: ComponentFixture<LinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
