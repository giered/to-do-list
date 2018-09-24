import { Component, OnInit } from '@angular/core';
import { ITodo } from './list-todo.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'td-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todoItems: ITodo[];
  completedTodos: ITodo[];

  currentDate = new Date();
  tomorrowDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 1);

  constructor(private todoListService: TodoListService) {}

  /// Initialize arrays for the list.
  ngOnInit() {
    this.todoItems = this.todoListService.getTodos();
    this.completedTodos = this.todoListService.getCompletedTodos();
    if (this.todoItems) {
      this.todoItems.sort(sortByPriority);
    }
    if (this.completedTodos.length > 5) {
      this.completedTodos = this.completedTodos.slice(
        Math.max(this.completedTodos.length - 5, 1)
      ).reverse();
    } else {
      this.completedTodos = this.completedTodos.slice().reverse();
    }
  }

  /// Toggle the completed flag on the todo item.
  toggleCheck(todoItem: ITodo) {
    if (!todoItem.completed) {
      this.todoListService.changeStatus(true, todoItem);
      this.ngOnInit();
      this.todoItems.sort(sortByPriority);
    } else {
      this.todoListService.changeStatus(false, todoItem);
      this.ngOnInit();
      this.todoItems.sort(sortByPriority);
    }
  }
}

/// Sort the array based on the priority of the item.
function sortByPriority(s1: ITodo, s2: ITodo) {
  if (s1.priority < s2.priority) {
    return 0;
  } else if (s1.priority > s2.priority) {
    return 1;
  } else {
    if (s1.dueDate > s2.dueDate) {
      return 1;
    }
    return -1;
  }
}

/* /// Sort the array based on the date it was completed.
function sortByDateComplete(s1: ITodo, s2: ITodo) {
  if (s1.dateCompleted > s2.dateCompleted) {
    return 0;
  } else if (s1.dateCompleted < s2.dateCompleted) {
    return 1;
  } else {
    return -1;
  }
} */
