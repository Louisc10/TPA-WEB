import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnduhAplikasiComponent } from './unduh-aplikasi.component';

describe('UnduhAplikasiComponent', () => {
  let component: UnduhAplikasiComponent;
  let fixture: ComponentFixture<UnduhAplikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnduhAplikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnduhAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
