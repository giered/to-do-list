import { Injectable } from '@angular/core';
import { ITodo } from '../list-todo.model';

@Injectable()
export class TodoListService {
  getTodos() {
    return TODOS;
  }
  getCategories() {
    CATEGORIES.sort();
    return CATEGORIES;
  }
  getLcations() {
    LOCATIONS.sort();
    return LOCATIONS;
  }

  addCategory(value: string) {
    CATEGORIES.push(value);
    CATEGORIES.sort();
  }

  addLocation(value: string) {
    LOCATIONS.push(value);
    LOCATIONS.sort();
  }
}

const CATEGORIES = ['Errands', 'Work', 'Test'];

const LOCATIONS = ['ILW', 'Store', 'Test'];

const TODOS: ITodo[] = [
  {
    title: 'Finish Program',
    priority: 1,
    category: 'Work',
    dueDate: new Date('12/1/2018'),
    completed: false,
    location: 'ILW',
    details: 'Here are some further details I need to know.',
    dateCompleted: null
  },
  {
    title: 'Get Groceries',
    priority: 2,
    category: 'Errands',
    dueDate: new Date('09/20/2018'),
    completed: false,
    location: 'Store',
    details: 'Here are some further details I need to know.',
    dateCompleted: null
  },
  {
    title: 'Last in List',
    priority: 1,
    category: 'Test',
    dueDate: new Date('09/22/2018'),
    completed: false,
    location: 'ILW',
    details: 'Testing...',
    dateCompleted: null
  }
];
