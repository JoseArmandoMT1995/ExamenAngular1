import { Component, OnInit } from '@angular/core';
import {Item}from '../../models/item'
//import {ItemService} from '../../services/item.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items:Item[]=[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items=[];
    
    this.items=this.itemService.getItems();
  }
  delateItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
    
  }

}
