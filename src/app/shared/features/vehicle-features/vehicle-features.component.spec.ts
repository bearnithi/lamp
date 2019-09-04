import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFeaturesComponent } from './vehicle-features.component';

describe('VehicleFeaturesComponent', () => {
  let component: VehicleFeaturesComponent;
  let fixture: ComponentFixture<VehicleFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
