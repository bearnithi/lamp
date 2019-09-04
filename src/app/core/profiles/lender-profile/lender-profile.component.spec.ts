import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderProfileComponent } from './lender-profile.component';

describe('LenderProfileComponent', () => {
  let component: LenderProfileComponent;
  let fixture: ComponentFixture<LenderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
