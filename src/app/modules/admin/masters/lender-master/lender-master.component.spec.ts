import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderMasterComponent } from './lender-master.component';

describe('LenderMasterComponent', () => {
  let component: LenderMasterComponent;
  let fixture: ComponentFixture<LenderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
