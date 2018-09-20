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

  constructor(
    private todoListService: TodoListService,
  ) {}

  /// Initialize arrays for the list.
  ngOnInit() {
    this.todoItems = this.isComplete(false);
    this.completedTodos = this.isComplete(true);
    if (this.todoItems) {
      this.todoItems.sort(sortByPriority);
    }
  }

  /// Check if the item has a completed flag and push it to the appropriate list.
  isComplete(isComplete: boolean): ITodo[] {
    const todoItems = this.todoListService.getTodos();
    if (!isComplete) {
      const needTodo: ITodo[] = [];
      todoItems.forEach(item => {
        if (!item.completed) {
          needTodo.push(item);
        }
      });
      return needTodo;
    } else {
      const completeTodo: ITodo[] = [];
      todoItems.forEach(item => {
        if (item.completed) {
          completeTodo.push(item);
        }
      });
      return completeTodo;
    }
  }

  /// Toggle the completed flag on the todo item.
  toggleCheck(todoItem: ITodo) {
    if (!todoItem.completed) {
      todoItem.completed = true;
      const index = this.todoItems.indexOf(todoItem);
      todoItem.dateCompleted = new Date();

      // Add the item to the completed array and remove it from the original array.
      this.completedTodos.push(todoItem);
      this.todoItems.splice(index, 1);

      // Sort the completed list based on the date it was completed.
      this.completedTodos.sort(sortByDateComplete);
    } else {
      todoItem.completed = false;
      todoItem.dateCompleted = null;
      const index = this.completedTodos.indexOf(todoItem);

      // Add the item to the original array and remove it from the completed array.
      this.todoItems.push(todoItem);
      this.completedTodos.splice(index, 1);
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

/// Sort the array based on the date it was completed.
function sortByDateComplete(s1: ITodo, s2: ITodo) {
  if (s1.dateCompleted > s2.dateCompleted) {
    return 0;
  } else if (s1.dateCompleted < s2.dateCompleted) {
    return 1;
  } else {
    return -1;
  }
}
