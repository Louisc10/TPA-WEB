import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBlogFormComponent } from './insert-blog-form.component';

describe('InsertBlogFormComponent', () => {
  let component: InsertBlogFormComponent;
  let fixture: ComponentFixture<InsertBlogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertBlogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
