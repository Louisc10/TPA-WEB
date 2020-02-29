import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBayarComponent } from './event-bayar.component';

describe('EventBayarComponent', () => {
  let component: EventBayarComponent;
  let fixture: ComponentFixture<EventBayarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBayarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
