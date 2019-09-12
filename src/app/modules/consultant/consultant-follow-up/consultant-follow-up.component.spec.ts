import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantFollowUpComponent } from './consultant-follow-up.component';

describe('ConsultantFollowUpComponent', () => {
  let component: ConsultantFollowUpComponent;
  let fixture: ComponentFixture<ConsultantFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
