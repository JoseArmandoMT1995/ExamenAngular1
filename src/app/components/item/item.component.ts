import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Item=new Item();
  @Output() delateItem: EventEmitter<Item> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelate(item:Item){
    this.delateItem.emit(item);
  }

}
