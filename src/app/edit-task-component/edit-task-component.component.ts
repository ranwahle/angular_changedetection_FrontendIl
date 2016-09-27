import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Task} from '../task';
import {User} from "../user";
import {Output} from "@angular/core/src/metadata/directives";


@Component({
  selector: 'app-edit-task-component',
  templateUrl: './edit-task-component.component.html',
  styleUrls: ['./edit-task-component.component.css']
})
export class EditTaskComponentComponent implements OnInit {


  owners: User[];
  @Input() task: Task;
  @Input() taskIndex: number;

  @Output() taskChanged: EventEmitter<any> = new EventEmitter<any>();

  setTitle(event) {
    this.task = this.task.setTitle(event.srcElement.value);
    this.triggerChange();
  }

  setDescription(event){
    this.task = this.task.setDescription(event.srcElement.value);
    this.triggerChange();
  }

  triggerChange() {
    this.taskChanged.emit({index: this.taskIndex, task: this.task});

  }


  ngOnInit() {
  }

  constructor() {
    this.owners = [new User('Ran', 'Wahle'), new User('Sharon', 'Wahle'),
      new User('Shiri', 'Wahle'), new User('Yaron', 'Wahle'), new User('Shani', 'Wahle')];
  }

  ownerChanged(newOwner) {
   this.task = this.task.setOwner(newOwner);
    this.triggerChange();
  }


}
