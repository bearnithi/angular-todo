import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodoComponent } from './completed-todo.component';

describe('CompletedTodoComponent', () => {
  let component: CompletedTodoComponent;
  let fixture: ComponentFixture<CompletedTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
