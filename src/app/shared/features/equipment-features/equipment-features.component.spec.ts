import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFeaturesComponent } from './equipment-features.component';

describe('EquipmentFeaturesComponent', () => {
  let component: EquipmentFeaturesComponent;
  let fixture: ComponentFixture<EquipmentFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
