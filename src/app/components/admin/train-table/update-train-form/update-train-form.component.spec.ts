import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainFormComponent } from './update-train-form.component';

describe('UpdateTrainFormComponent', () => {
  let component: UpdateTrainFormComponent;
  let fixture: ComponentFixture<UpdateTrainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
