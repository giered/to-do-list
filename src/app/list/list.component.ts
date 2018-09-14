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

  constructor(private todoListService: TodoListService) {

  }

  ngOnInit() {
    this.todoItems = this.todoListService.getTodos();
    if (this.todoItems) {
      this.todoItems.sort(sortByPriority);
    }
  }

}

function sortByPriority(s1: ITodo, s2: ITodo) {
  if (s1.priority < s2.priority) {
    if (s1.priority === 1 && s2.priority === 1) {
      return 0;
    }
    return 0;
  } else if (s1.priority > s2.priority) {
    if (s1.priority === 1 && s2.priority === 1) {
      return 1;
    }
    return 1;
  } else {
    if (s1.dueDate > s2.dueDate) {
      return 1;
    }
    return -1;
  }

}
