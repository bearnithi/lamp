import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMainComponent } from './consultant-main.component';

describe('ConsultantMainComponent', () => {
  let component: ConsultantMainComponent;
  let fixture: ComponentFixture<ConsultantMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
