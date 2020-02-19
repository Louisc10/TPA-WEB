import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaimentFilterComponent } from './entertaiment-filter.component';

describe('EntertaimentFilterComponent', () => {
  let component: EntertaimentFilterComponent;
  let fixture: ComponentFixture<EntertaimentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertaimentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertaimentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
