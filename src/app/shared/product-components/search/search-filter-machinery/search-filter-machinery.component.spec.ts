import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterMachineryComponent } from './search-filter-machinery.component';

describe('SearchFilterMachineryComponent', () => {
  let component: SearchFilterMachineryComponent;
  let fixture: ComponentFixture<SearchFilterMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
