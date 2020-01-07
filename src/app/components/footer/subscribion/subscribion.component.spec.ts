import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribionComponent } from './subscribion.component';

describe('SubscribionComponent', () => {
  let component: SubscribionComponent;
  let fixture: ComponentFixture<SubscribionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
