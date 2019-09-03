import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMasterComponent } from './consultant-master.component';

describe('ConsultantMasterComponent', () => {
  let component: ConsultantMasterComponent;
  let fixture: ComponentFixture<ConsultantMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
