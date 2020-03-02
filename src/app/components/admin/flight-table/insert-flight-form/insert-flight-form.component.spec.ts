import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFlightFormComponent } from './insert-flight-form.component';

describe('InsertFlightFormComponent', () => {
  let component: InsertFlightFormComponent;
  let fixture: ComponentFixture<InsertFlightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFlightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFlightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
