import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProductsComponent } from './associate-products.component';

describe('AssociateProductsComponent', () => {
  let component: AssociateProductsComponent;
  let fixture: ComponentFixture<AssociateProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
