import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterTakeOverComponent } from './search-filter-take-over.component';

describe('SearchFilterTakeOverComponent', () => {
  let component: SearchFilterTakeOverComponent;
  let fixture: ComponentFixture<SearchFilterTakeOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterTakeOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterTakeOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
