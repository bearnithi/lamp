import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCarsComponent } from './search-filter-cars.component';

describe('SearchFilterCarsComponent', () => {
  let component: SearchFilterCarsComponent;
  let fixture: ComponentFixture<SearchFilterCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
