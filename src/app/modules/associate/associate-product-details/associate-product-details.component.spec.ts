import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProductDetailsComponent } from './associate-product-details.component';

describe('AssociateProductDetailsComponent', () => {
  let component: AssociateProductDetailsComponent;
  let fixture: ComponentFixture<AssociateProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
