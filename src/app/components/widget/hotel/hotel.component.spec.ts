import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelWidget } from './hotel.component';

describe('HotelWidget', () => {
  let component: HotelWidget;
  let fixture: ComponentFixture<HotelWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
