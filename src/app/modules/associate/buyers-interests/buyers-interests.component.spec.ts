import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersInterestsComponent } from './buyers-interests.component';

describe('BuyersInterestsComponent', () => {
  let component: BuyersInterestsComponent;
  let fixture: ComponentFixture<BuyersInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
