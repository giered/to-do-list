import { Component, OnInit } from '@angular/core';
import { ITodo } from './list-todo.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'td-list-done',
  templateUrl: './list-done.component.html'
})
export class ListDoneComponent implements OnInit {
  completedTodos: ITodo[];
  pageHeading: string;

  constructor(private listService: TodoListService) {}

  ngOnInit() {
    this.completedTodos = this.listService.getCompletedTodos();
    if (this.completedTodos.length === 0) {
      this.pageHeading = 'No Todos Completed';
    } else {
      this.completedTodos = this.completedTodos.slice().reverse();
    }
  }

  toggleCheck(todoItem: ITodo) {
    this.listService.changeStatus(false, todoItem);
    this.ngOnInit();
  }

  deleteTodo(item: ITodo) {
    this.listService.deleteTodo(item);
    this.ngOnInit();
  }
}
