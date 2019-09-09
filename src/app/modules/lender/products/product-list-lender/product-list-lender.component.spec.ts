import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListLenderComponent } from './product-list-lender.component';

describe('ProductListLenderComponent', () => {
  let component: ProductListLenderComponent;
  let fixture: ComponentFixture<ProductListLenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListLenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
