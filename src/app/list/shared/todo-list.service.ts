import { Injectable } from '@angular/core';
import { ITodo } from '../list-todo.model';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Injectable()
export class TodoListService {
  getTodos() {
    return TODOS;
  }

  getCompletedTodos() {
    return COMPLETED_TODOS;
  }

  deleteTodo(todoItem: ITodo) {
    const index = COMPLETED_TODOS.indexOf(todoItem);
    COMPLETED_TODOS.splice(index, 1);
  }

  getCategories() {
    if (CATEGORIES.length === 0) {
      TODOS.forEach(function(todoItem) {
        if (CATEGORIES.indexOf(todoItem.category) === -1) {
          CATEGORIES.push(todoItem.category);
        }
      });
    }
    CATEGORIES.sort();
    return CATEGORIES;
  }
  getLocations() {
    if (LOCATIONS.length === 0) {
      TODOS.forEach(function(todoItem) {
        if (LOCATIONS.indexOf(todoItem.location) === -1) {
          LOCATIONS.push(todoItem.location);
        }
      });
    }
    LOCATIONS.sort();
    return LOCATIONS;
  }

  createTodo(todoItem: ITodo) {
    TODOS.push(todoItem);
  }

  addCategory(value: string) {
    value = value[0].toUpperCase() + value.slice(1).toLowerCase();
    if	(CATEGORIES.indexOf(value) === -1) {
      CATEGORIES.push(value);
    }
    CATEGORIES.sort();
  }

  addLocation(value: string) {
    value = value[0].toUpperCase() + value.slice(1).toLowerCase();
    if (LOCATIONS.indexOf(value) === -1) {
      LOCATIONS.push(value);
    }
    LOCATIONS.sort();
  }

  changeStatus(completeStatus: boolean, todoItem: ITodo) {
    todoItem.completed = completeStatus;

    if (todoItem.completed) {
      const index = TODOS.indexOf(todoItem);
      todoItem.dateCompleted = new Date();

      COMPLETED_TODOS.push(todoItem);
      TODOS.splice(index, 1);
    } else {
      const index = COMPLETED_TODOS.indexOf(todoItem);
      todoItem.dateCompleted = null;

      TODOS.push(todoItem);
      COMPLETED_TODOS.splice(index, 1);
    }
  }
}

let CATEGORIES = [];

let LOCATIONS = [];

const TODOS: ITodo[] = [
  {
    title: 'Finish Program',
    priority: 1,
    category: 'Work',
    dueDate: new Date('12/1/2018'),
    completed: false,
    location: 'ILW',
    details:
      // tslint:disable-next-line:max-line-length
      'Here are some further details I need to know. This is the beginning of the overflow test. This is to ensure that the text actually wraps rather than overflow outside of the to-do that it belongs to.',
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
    title: 'Test Todo',
    priority: 3,
    category: 'Work',
    dueDate: new Date('09/12/2018'),
    completed: false,
    location: 'ILW',
    details: 'Here are some further details I need to know.',
    dateCompleted: null
  },
  {
    title: 'Yet Another Todo',
    priority: 1,
    category: 'Work',
    dueDate: new Date('02/19/2019'),
    completed: false,
    location: 'Nowhere',
    details: 'Here are some further details I need to know.',
    dateCompleted: null
  },
  {
    title: 'Neat...',
    priority: 2,
    category: 'Test',
    dueDate: new Date('06/17/2020'),
    completed: false,
    location: 'ILW',
    details: 'Testing...',
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

const COMPLETED_TODOS: ITodo[] = [];
