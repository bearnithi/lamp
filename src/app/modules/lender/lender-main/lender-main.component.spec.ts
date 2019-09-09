import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderMainComponent } from './lender-main.component';

describe('LenderMainComponent', () => {
  let component: LenderMainComponent;
  let fixture: ComponentFixture<LenderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
