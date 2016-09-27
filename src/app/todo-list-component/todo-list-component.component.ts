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
  constructor(private cdRef:ChangeDetectorRef = null) {
    this.tasks = [];
    this.cdState = 'started';
  }

  stopChangeDetector(){
    this.cdState = 'stopped';
    this.cdRef.detach();
  }

  restartChangeDetector(){
    this.cdState = 'started';
    this.cdRef.reattach();
  }

  periodicChangeDetection(){
    if (this.cdState === 'started'){
      return;
    }
    this.cdRef.detectChanges();
    setTimeout(() => this.periodicChangeDetection(), 5000 );
  }

  editTask(task:Task){
    let taskIndex = this.tasks.indexOf(task);
    let newTask =  task.setIsEdited(true);//sEdited = false;
    this.tasks[taskIndex] = newTask;

    this.cdRef.detectChanges();
  }

  ngOnInit() {
  }

  taskChanged(taskChangedEvent:any){
    let oldTask = this.tasks[ taskChangedEvent.index];

    this.tasks[taskChangedEvent.index]  = taskChangedEvent.task;
  }

  save(task:Task){
    let taskIndex = this.tasks.indexOf(task);
    let newTask =  task.setIsEdited(false);//sEdited = false;
    this.tasks[taskIndex] = newTask;

    this.cdRef.detectChanges();
  }

  addTask(){
    let task = new Task({owner: new User('Default', 'User')});

    this.tasks.push(task);
  }

}
