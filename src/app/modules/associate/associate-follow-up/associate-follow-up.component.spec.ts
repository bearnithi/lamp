import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateFollowUpComponent } from './associate-follow-up.component';

describe('AssociateFollowUpComponent', () => {
  let component: AssociateFollowUpComponent;
  let fixture: ComponentFixture<AssociateFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
