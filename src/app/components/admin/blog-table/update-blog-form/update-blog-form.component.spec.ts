import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogFormComponent } from './update-blog-form.component';

describe('UpdateBlogFormComponent', () => {
  let component: UpdateBlogFormComponent;
  let fixture: ComponentFixture<UpdateBlogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBlogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
