import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateMainComponent } from './associate-main.component';

describe('AssociateMainComponent', () => {
  let component: AssociateMainComponent;
  let fixture: ComponentFixture<AssociateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
