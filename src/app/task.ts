import {User} from "./user";
import  {Map} from 'immutable';
export class Task {
  private _data:Map<string, any>;

  constructor(data:any = null){
    data = data || {title: '', description: '', owner: new User('Default', 'User'),
      isEdited: false};
    this._data = Map<string, any>(data);
  }
  get title(): string
  {
    return <string> this._data.get('title');
  }

  setTitle(title:string){
    return new Task(this._data.set('title', title));
  }


  get description(): string
  {
    return <string> this._data.get('description');
  }

  setDescription(description:string):Task{
    return new Task(this._data.set('description', description));
  }

  get isEdited(): boolean
  {
    return <boolean> this._data.get('isEdited');
  }
  setIsEdited(isEdited:boolean):Task{
    return new Task( this._data.set('isEdited', isEdited));
  }

  get owner(): User
  {
    return <User> this._data.get('owner');
  }
  setOwner(owner:User):Task{
    return new Task(this._data.set('owner', owner));
  }




}
