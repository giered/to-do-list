import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CreateTodosComponent } from './list/create-todos/create-todos.component';
import { ListDoneComponent } from './list/list-done.component';

export const routes: Routes = [
  { path: 'todo/new', component: CreateTodosComponent },
  { path: 'todo/done', component: ListDoneComponent},
  { path: 'todo', component: ListComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

