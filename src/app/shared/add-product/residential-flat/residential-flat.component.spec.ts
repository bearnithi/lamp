import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialFlatComponent } from './residential-flat.component';

describe('ResidentialFlatComponent', () => {
  let component: ResidentialFlatComponent;
  let fixture: ComponentFixture<ResidentialFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
