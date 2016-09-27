import {Component, OnInit, Input} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-task-owner-component',
  templateUrl: './task-owner-component.component.html',
  styleUrls: ['./task-owner-component.component.css']
})
export class TaskOwnerComponentComponent implements OnInit {

  @Input() owner:User;
  constructor() { }

  ngOnInit() {
  }

}
