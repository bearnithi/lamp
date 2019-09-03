import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociteComponent } from './add-associte.component';

describe('AddAssociteComponent', () => {
  let component: AddAssociteComponent;
  let fixture: ComponentFixture<AddAssociteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssociteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssociteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
