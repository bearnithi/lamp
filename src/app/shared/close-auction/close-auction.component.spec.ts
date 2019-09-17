import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAuctionComponent } from './close-auction.component';

describe('CloseAuctionComponent', () => {
  let component: CloseAuctionComponent;
  let fixture: ComponentFixture<CloseAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
