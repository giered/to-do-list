import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CreateTodosComponent } from './list/create-todos/create-todos.component';

export const routes: Routes = [
  { path: 'todo/new', component: CreateTodosComponent },
  { path: 'todo', component: ListComponent },
   { path: '', redirectTo: '/todo', pathMatch: 'full' },
  // { path: 'path4', component:  },
  // { path: '**', component:  },

  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

