import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTableComponent } from './hotel-table.component';

describe('HotelTableComponent', () => {
  let component: HotelTableComponent;
  let fixture: ComponentFixture<HotelTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
