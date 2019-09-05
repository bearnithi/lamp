import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductLenderComponent } from './add-product-lender.component';

describe('AddProductLenderComponent', () => {
  let component: AddProductLenderComponent;
  let fixture: ComponentFixture<AddProductLenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductLenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
