/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoListComponentComponent } from './todo-list-component.component';
import {ChangeDetectorRef} from "@angular/core";

describe('Component: TodoListComponent', () => {
  it('should create an instance', () => {
    //let changeDetectorRef:ChangeDetectorRef = new ChangeDetectorRef();
    let component = new TodoListComponentComponent();
    expect(component).toBeTruthy();
  });
});
