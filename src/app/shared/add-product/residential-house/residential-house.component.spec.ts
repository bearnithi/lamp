import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialHouseComponent } from './residential-house.component';

describe('ResidentialHouseComponent', () => {
  let component: ResidentialHouseComponent;
  let fixture: ComponentFixture<ResidentialHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
