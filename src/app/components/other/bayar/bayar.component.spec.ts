import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarComponent } from './bayar.component';

describe('BayarComponent', () => {
  let component: BayarComponent;
  let fixture: ComponentFixture<BayarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
