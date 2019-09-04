import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfileComponent } from './associate-profile.component';

describe('AssociateProfileComponent', () => {
  let component: AssociateProfileComponent;
  let fixture: ComponentFixture<AssociateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
