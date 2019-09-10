import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTeamAssignComponent } from './product-team-assign.component';

describe('ProductTeamAssignComponent', () => {
  let component: ProductTeamAssignComponent;
  let fixture: ComponentFixture<ProductTeamAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTeamAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTeamAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
