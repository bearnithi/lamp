import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterStockLotsComponent } from './search-filter-stock-lots.component';

describe('SearchFilterStockLotsComponent', () => {
  let component: SearchFilterStockLotsComponent;
  let fixture: ComponentFixture<SearchFilterStockLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterStockLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterStockLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
