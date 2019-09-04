import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLenderComponent } from './add-lender.component';

describe('AddLenderComponent', () => {
  let component: AddLenderComponent;
  let fixture: ComponentFixture<AddLenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
