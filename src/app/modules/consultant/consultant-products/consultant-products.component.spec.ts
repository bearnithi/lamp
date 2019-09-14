import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantProductsComponent } from './consultant-products.component';

describe('ConsultantProductsComponent', () => {
  let component: ConsultantProductsComponent;
  let fixture: ComponentFixture<ConsultantProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
