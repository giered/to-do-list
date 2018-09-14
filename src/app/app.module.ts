import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodoListService } from './list/shared/todo-list.service';
import { CreateTodosComponent } from './list/create-todos/create-todos.component';
import { NavBarComponent } from './navigation/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTodosComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ TodoListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
