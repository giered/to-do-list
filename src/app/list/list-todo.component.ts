import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from './list-todo.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'td-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list.component.css']
})
export class TodoListComponent implements OnChanges {
  @Input() todoItems: ITodo[];
  @Input() catFilter: string;
  @Input() locFilter: string;
  @Output() completeTodos = new EventEmitter();

  visibleTodoItems: ITodo[] = [];

  currentDate = new Date();
  tomorrowDate = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth(),
    this.currentDate.getDate() + 1
  );

  constructor(private todoListService: TodoListService) {}

  ngOnChanges() {
      this.filterTodoCategories(this.catFilter);
      this.filterTodoLocations(this.locFilter);
  }

  filterTodoCategories(filter: string) {
    if (filter === 'all') {
      this.visibleTodoItems = this.todoItems.slice(0);
      this.visibleTodoItems.sort(sortByPriority);
    } else {
      this.visibleTodoItems = this.todoItems.filter(todoItem => {
        return todoItem.category === filter;
      });
      this.visibleTodoItems.sort(sortByPriority);
    }
  }

  filterTodoLocations(filter: string) {
    if (filter !== 'all') {
      this.visibleTodoItems = this.visibleTodoItems.filter(todoItem => {
        return todoItem.location === filter;
      });
    }
  }

  /// Toggle the completed flag on the todo item.
  toggleCheck(todoItem: ITodo) {
    this.todoListService.changeStatus(true, todoItem);
    this.visibleTodoItems.sort(sortByPriority);
    this.completeTodos.emit({});
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
