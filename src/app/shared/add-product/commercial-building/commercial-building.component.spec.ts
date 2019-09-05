import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuildingComponent } from './commercial-building.component';

describe('CommercialBuildingComponent', () => {
  let component: CommercialBuildingComponent;
  let fixture: ComponentFixture<CommercialBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
