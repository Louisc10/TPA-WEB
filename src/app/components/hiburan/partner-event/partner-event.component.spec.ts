import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEventComponent } from './partner-event.component';

describe('PartnerEventComponent', () => {
  let component: PartnerEventComponent;
  let fixture: ComponentFixture<PartnerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
