import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodoListService } from './list/shared/todo-list.service';
import { CreateTodosComponent } from './list/create-todos/create-todos.component';
import { NavBarComponent } from './navigation/navbar.component';
import { CreateValueComponent } from './list/create-todos/create-new-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTodosComponent,
    NavBarComponent,
    CreateValueComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ TodoListService ],
  bootstrap: [AppComponent],
  entryComponents: [ CreateValueComponent ]
})
export class AppModule { }
