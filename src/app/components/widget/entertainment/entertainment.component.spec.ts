import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentWidget } from './entertainment.component';

describe('EntertainmentWidget', () => {
  let component: EntertainmentWidget;
  let fixture: ComponentFixture<EntertainmentWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
