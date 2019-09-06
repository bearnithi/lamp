import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateMyProfileComponent } from './associate-my-profile.component';

describe('AssociateMyProfileComponent', () => {
  let component: AssociateMyProfileComponent;
  let fixture: ComponentFixture<AssociateMyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateMyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
