import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TixPointComponent } from './tix-point.component';

describe('TixPointComponent', () => {
  let component: TixPointComponent;
  let fixture: ComponentFixture<TixPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TixPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TixPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
