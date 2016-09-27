import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.css']
})
export class DropdownComponentComponent implements OnInit {


  private _items: any;
  private showSearch: boolean;
  private searchWord: string;
  private searchboxId: string;
  private previousSelectedItem: any;
  @Input() id: string;
  private _selectedItem: any;
  private _previousSelectedItem: any;
  private showMenu: boolean;
  private topItems: number;
  @Input() nameProperty: string;
  @Output() onSelectionChange: EventEmitter<any>;

  @Input() defaultText: string;

  @Input() disabled: boolean;

  @Input() label: string;
  @Input() autoSelectIfSingle: boolean;
  @Input() hideSearchBox: boolean;

  get HasMore() {
    return this.items && !this.items.length &&
      this.topItems < this.items.length;
  }

  constructor() {
    this._items = [];
    this.searchboxId = 'searchbox_' + this.id;
    this.searchWord = '';
    this.selectedItem = {};
    this.onSelectionChange = new EventEmitter();
    this.topItems = 10;


  }

  ngOnChanges(changes: {}): any {
    if (changes['items'] && !changes['selectedItem']) {
      if (changes['items'].currentValue) {
        let previousSelectedItem = this.selectedItem || this.previousSelectedItem;
        if (previousSelectedItem && this.items) {
          let itemToSearch = item => (item[this.nameProperty] || item) === (previousSelectedItem[this.nameProperty] || previousSelectedItem );
          this.selectedItem = this.items.find(itemToSearch);
        }
        if (previousSelectedItem && !this.selectedItem) {
          this.previousSelectedItem = previousSelectedItem;
        }
      }
    }
    // else if (changes['selectedItem'] && (!this.items || !this.items.find(item => item[this.nameProperty] ===  )) )
    console.log('changes', changes);
  }

  showMore() {
    this.topItems += 10;
  }

  ngOnInit(): any {
    console.log('Oninit');
  }

  ngOnDestroy(): any {
    console.log('Ondestroy');
  }


  toggleMenu(show) {
    this.showMenu = show || !this.showMenu;
  }

  buttonKeyPress($event) {
    console.log($event);
    if (!this.showSearch && $event.charCode)
      this.searchWord += String.fromCharCode($event.charCode);
    this.showSearch = true;
    var searchBox = $event.srcElement;// document.getElementById(this.searchboxId);
    searchBox.focus();


  }

  @Input()
  get selectedItem() {
    return this._selectedItem;
  }

  set selectedItem(item) {
    if (!item) {
      this._previousSelectedItem = this._selectedItem;
    }
    this._selectedItem = item;
  }


  itemSelected(item) {
    this.selectedItem = item;
    this.showSearch = false;
    this.showMenu = false;
    this.onSelectionChange.emit(item);
  }

  compareItems(item1, item2) {
    if (item1 === item2) {
      return true;
    }
    let result: boolean = true;
    let keys = [];
    for (let key in item1) {
      keys.push(key);
    }
    //If any keys on item2 aren't exist on item1 - return false
    for (let key in item2) {
      if (!keys.find(key1 => key == key1)) {
        result = false;
      }
    }
    for (let index = 0; index < keys.length && result; index++) {
      let key = keys[index];
      result = result && item1[key] === item2[key];
    }

    return result;


  }

  @Input()
  get items() {
    return this._items;
  }

  set items(value) {

    this.selectedItem = null;

    if (!value || !value.length)
      return;
    var newValues = value;
    this._items = newValues;

    // if (this._previousSelectedItem
    //   && this.items.find(item => this.compareItems(item, this._previousSelectedItem))) {
    //   this.itemSelected(this._previousSelectedItem);
    // }

     if (this._items.length === 1 && this.autoSelectIfSingle) {
      this.selectedItem = this.items[0];

    }
  }


}
