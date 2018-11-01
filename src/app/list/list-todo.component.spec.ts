import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './list-todo.component';
import { DoneCheckComponent } from './done-checkbox.component';
import { DebugElement } from '@angular/core';
import { CollapsibleTodoComponent } from './shared/collapsible-todo.component';
import { TodoListService } from './shared/todo-list.service';

describe('initial display', () => {
  let fixture: ComponentFixture<TodoListComponent>,
    component: TodoListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async(() => {
      let mockListService = {

      };

      TestBed.configureTestingModule({
        imports: [],
        declarations: [
          TodoListComponent,
          DoneCheckComponent,
          CollapsibleTodoComponent
        ],
        providers: [
          { provide: TodoListService, useValue: mockListService }
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = fixture.nativeElement;
    });

    describe('should display the todo with correct information', () => {
      component.todoItems = [{title: 'Todo 1', priority: 1, category: 'test', dueDate: new Date('12/09/18'),
        completed: false, location: 'ILW', details: '', dateCompleted: null}];

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[card-head]').textContent).toContain('Todo 1');
    });
});
