import { Component, OnInit } from '@angular/core';
import { ITodo } from './list-todo.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'td-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: ITodo[];
  completedTodos: ITodo[];
  todoCategories: string[];
  todoLocations: string[];

  filterCat = 'all';
  filterLoc = 'all';

  constructor(private todoListService: TodoListService) {}

  /// Initialize arrays for the list.
  ngOnInit() {
    this.todoCategories = this.todoListService.getCategories();
    this.todoLocations = this.todoListService.getLocations();

    this.todos = this.todoListService.getTodos();
    this.updateCompletedTodos();
  }

  updateCompletedTodos() {
    this.completedTodos = this.todoListService.getCompletedTodos();
    if (this.completedTodos) {
      if (this.completedTodos.length > 5) {
        this.completedTodos = this.completedTodos
          .slice(Math.max(this.completedTodos.length - 5, 1))
          .reverse();
      } else {
        this.completedTodos = this.completedTodos.slice().reverse();
      }
    }
  }

  /// Toggle the completed flag on the todo item.
  toggleCheck(todoItem: ITodo) {
    this.todoListService.changeStatus(false, todoItem);
    this.ngOnInit();
  }
}
