import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormGroupComponent } from './contact-form-group.component';

describe('ContactFormGroupComponent', () => {
  let component: ContactFormGroupComponent;
  let fixture: ComponentFixture<ContactFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
