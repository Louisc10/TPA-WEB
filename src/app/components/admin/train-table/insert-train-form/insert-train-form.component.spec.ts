import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTrainFormComponent } from './insert-train-form.component';

describe('InsertTrainFormComponent', () => {
  let component: InsertTrainFormComponent;
  let fixture: ComponentFixture<InsertTrainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTrainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
