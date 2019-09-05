import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcvComponent } from './lcv.component';

describe('LcvComponent', () => {
  let component: LcvComponent;
  let fixture: ComponentFixture<LcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
