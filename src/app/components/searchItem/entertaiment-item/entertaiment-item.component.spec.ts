import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaimentItemComponent } from './entertaiment-item.component';

describe('EntertaimentItemComponent', () => {
  let component: EntertaimentItemComponent;
  let fixture: ComponentFixture<EntertaimentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertaimentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertaimentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
