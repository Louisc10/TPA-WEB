import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChatroomComponent } from './home-chatroom.component';

describe('HomeChatroomComponent', () => {
  let component: HomeChatroomComponent;
  let fixture: ComponentFixture<HomeChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
