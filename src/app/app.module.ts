import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { TaskOwnerComponentComponent } from './task-owner-component/task-owner-component.component';
import { EditTaskComponentComponent } from './edit-task-component/edit-task-component.component';
import { EditUserComponentComponent } from './edit-user-component/edit-user-component.component';
import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';
import { DropdownFilterPipe } from './dropdown-filter.pipe';
import { ShowTopPipe } from './show-top.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    TaskComponentComponent,
    TaskOwnerComponentComponent,
    EditTaskComponentComponent,
    EditUserComponentComponent,
    DropdownComponentComponent,

    DropdownFilterPipe,

    ShowTopPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
