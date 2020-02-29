import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEventFormComponent } from './insert-event-form.component';

describe('InsertEventFormComponent', () => {
  let component: InsertEventFormComponent;
  let fixture: ComponentFixture<InsertEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
