import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
nombre:string="";
apellidos:string="";
curp:string="";
direccion:string="";
sexo:string="";
  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const item=new Item();
    item.nombre=this.nombre;
    item.apellidos=this.apellidos;  
    item.direccion=this.direccion;
    item.curp=this.curp;
    if (this.nombre !== "" || this.apellidos !== ""
    || this.direccion !== "" || this.curp == "" 
    || this.curp.length === 18 || this.curp.substring(10, 11)=== "M" 
    || this.curp.substring(10, 11)=== "H") {
      item.sexo=this.obtenerSexo(this.curp);
      item.fechaNacimiento=this.obtenerFecha(this.curp);
      this.itemService.addItem(item);
      this.router.navigate(["./"]);
      //window.location.href = "./";
      alert("Se ha creado el registro");  
    }else{
      alert("Ingrese los datos en las casillas!");
    }  
  }
  obtenerSexo(curp:string){
    let sexo=curp.substring(10, 11);
    if (sexo=== "M" || sexo === "m") {
      sexo="Mujer";
    } 
    if (sexo=== "H" || sexo === "h") {
      sexo="Hombre";
    }
    return sexo;
  }
  obtenerFecha(curp:string){
    let fecha=curp.substring(4, 10);
    let ano=fecha.substring(0, 2);
    let mes=fecha.substring(2, 4);
    let dia=fecha.substring(4, 6);
    fecha = dia+"-"+mes+"-"+ano;
    return fecha;
  }

}
