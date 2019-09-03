import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAuctionComponent } from './auction-master.component';

describe('ConsultantAuctionComponent', () => {
  let component: ConsultantAuctionComponent;
  let fixture: ComponentFixture<ConsultantAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
