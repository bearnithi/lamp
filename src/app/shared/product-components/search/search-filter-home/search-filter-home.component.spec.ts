import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterHomeComponent } from './search-filter-home.component';

describe('SearchFilterHomeComponent', () => {
  let component: SearchFilterHomeComponent;
  let fixture: ComponentFixture<SearchFilterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
