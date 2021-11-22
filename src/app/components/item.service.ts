import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems(){
    return[
      {
        id:1,
        title:'manzana',
        precio:10.5,
        quantity:4,
        complement:false
      },
      {
        id:2,
        title:'pan',
        precio:7,
        quantity:2,
        complement:true
      },
      {
        id:3,
        title:'panXXX',
        precio:100,
        quantity:2,
        complement:true
      },
    ]
  }
}
