import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertHotelFormComponent } from './insert-hotel-form.component';

describe('InsertHotelFormComponent', () => {
  let component: InsertHotelFormComponent;
  let fixture: ComponentFixture<InsertHotelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertHotelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertHotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
