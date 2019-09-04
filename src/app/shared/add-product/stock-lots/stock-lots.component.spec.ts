import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLotsComponent } from './stock-lots.component';

describe('StockLotsComponent', () => {
  let component: StockLotsComponent;
  let fixture: ComponentFixture<StockLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
