import { Injectable } from '@angular/core';
import { ITodo } from '../list-todo.model';

@Injectable()
export class TodoListService {
  getTodos(): ITodo[] {
    return TODOS;
  }
}

const TODOS: ITodo[] = [
  {
    title: 'Finish Program',
    priority: 1,
    category: 'Work',
    dueDate: new Date('1/1/2018'),
    completed: false,
    location: 'ILW',
  },
  {
    title: 'Get Groceries',
    priority: 2,
    category: 'Errands',
    dueDate: new Date('09/20/2018'),
    completed: false,
    location: 'Store',
  },
];
