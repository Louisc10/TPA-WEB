import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRecommendedComponent } from './hotel-recommended.component';

describe('HotelRecommendedComponent', () => {
  let component: HotelRecommendedComponent;
  let fixture: ComponentFixture<HotelRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
