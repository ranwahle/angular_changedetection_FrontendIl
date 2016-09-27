import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Task} from '../task';
import {User} from "../user";

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {

  tasks:Task[];
  cdState:string;
  constructor() {
    this.tasks = [];
    this.cdState = 'started';
  }

  ngOnInit() {
  }

  taskChanged(taskChangedEvent:any){
    let oldTask = this.tasks[ taskChangedEvent.index];

    this.tasks[taskChangedEvent.index]  = taskChangedEvent.task;
  }

  save(task:Task){
    let taskIndex = this.tasks.indexOf(task);
    let newTask =  task.setIsEdited(false);//sEd ited = false;
    this.tasks[taskIndex] = newTask;


  }

  addTask(){
    let task = new Task({owner: new User('Default', 'User')});

    this.tasks.push(task);
  }

}
