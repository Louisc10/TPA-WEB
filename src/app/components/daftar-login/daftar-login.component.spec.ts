import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarLoginComponent } from './daftar-login.component';

describe('DaftarLoginComponent', () => {
  let component: DaftarLoginComponent;
  let fixture: ComponentFixture<DaftarLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
