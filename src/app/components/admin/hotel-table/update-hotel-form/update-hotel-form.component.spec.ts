import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelFormComponent } from './update-hotel-form.component';

describe('UpdateHotelFormComponent', () => {
  let component: UpdateHotelFormComponent;
  let fixture: ComponentFixture<UpdateHotelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHotelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
