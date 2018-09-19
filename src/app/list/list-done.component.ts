import { Component } from '@angular/core';
import { ITodo } from './list-todo.model';

@Component({
  selector: 'td-list-done',
  templateUrl: './list-done.component.html'
})
export class ListDoneComponent {
  todoItems: ITodo[];

  constructor() { }

  toggleCheck(todoItem: ITodo) {

  }
}
