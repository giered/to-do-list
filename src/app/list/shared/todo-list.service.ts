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
    dueDate: new Date('12/1/2018'),
    completed: false,
    location: 'ILW',
    details: 'Here are some further details I need to know.'
  },
  {
    title: 'Get Groceries',
    priority: 2,
    category: 'Errands',
    dueDate: new Date('09/20/2018'),
    completed: false,
    location: 'Store',
    details: 'Here are some further details I need to know.'
  },
  {
    title: 'Last in List',
    priority: 1,
    category: 'Test',
    dueDate: new Date('09/22/2018'),
    completed: false,
    location: 'ILW',
    details: 'Testing...'
  }
];
