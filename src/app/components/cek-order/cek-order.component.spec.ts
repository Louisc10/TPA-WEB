import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekOrderComponent } from './cek-order.component';

describe('CekOrderComponent', () => {
  let component: CekOrderComponent;
  let fixture: ComponentFixture<CekOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
