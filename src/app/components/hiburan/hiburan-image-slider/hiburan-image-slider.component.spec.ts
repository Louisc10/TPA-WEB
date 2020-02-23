import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiburanImageSliderComponent } from './hiburan-image-slider.component';

describe('HiburanImageSliderComponent', () => {
  let component: HiburanImageSliderComponent;
  let fixture: ComponentFixture<HiburanImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiburanImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiburanImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
