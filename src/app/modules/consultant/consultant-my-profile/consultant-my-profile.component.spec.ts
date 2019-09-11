import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMyProfileComponent } from './consultant-my-profile.component';

describe('ConsultantMyProfileComponent', () => {
  let component: ConsultantMyProfileComponent;
  let fixture: ComponentFixture<ConsultantMyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
