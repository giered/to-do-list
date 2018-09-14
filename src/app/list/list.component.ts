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
  }



}
