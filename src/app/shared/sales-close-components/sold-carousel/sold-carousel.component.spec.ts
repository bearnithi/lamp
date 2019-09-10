import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCarouselComponent } from './sold-carousel.component';

describe('SoldCarouselComponent', () => {
  let component: SoldCarouselComponent;
  let fixture: ComponentFixture<SoldCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
