import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFilterComponent } from './train-filter.component';

describe('TrainFilterComponent', () => {
  let component: TrainFilterComponent;
  let fixture: ComponentFixture<TrainFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
