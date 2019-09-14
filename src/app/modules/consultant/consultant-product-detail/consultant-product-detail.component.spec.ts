import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantProductDetailComponent } from './consultant-product-detail.component';

describe('ConsultantProductDetailComponent', () => {
  let component: ConsultantProductDetailComponent;
  let fixture: ComponentFixture<ConsultantProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
