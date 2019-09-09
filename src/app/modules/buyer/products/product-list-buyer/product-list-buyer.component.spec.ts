import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBuyerComponent } from './product-list-buyer.component';

describe('ProductListBuyerComponent', () => {
  let component: ProductListBuyerComponent;
  let fixture: ComponentFixture<ProductListBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
