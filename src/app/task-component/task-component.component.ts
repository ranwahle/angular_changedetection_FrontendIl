import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import  {Task} from '../task';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  @Input() task:Task;
  constructor() { }

  ngOnInit() {
  }

}
