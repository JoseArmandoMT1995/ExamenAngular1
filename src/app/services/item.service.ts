import { Injectable } from '@angular/core';
import {Item} from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor() { }
  items:Item[]=[
    {
      id:1,
      nombre:"JOSE ARMANDO",
      apellidos:"MORENO TOLENTINO",
      sexo:"Hombre",
      curp:"MOTA950223HDFRLR04",
      direccion:"ORIENTE 6 MANZANA 59 LOTE 27, COLONIA CUCHILLA DEL TESORO, GAM",
      fechaNacimiento:"23-02-95",
      
    }
  ];
  getItems(){   
    return this.items;
  }
  addItem(item:Item){
    this.items.unshift(item);

  }
}
