import { Component, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';

@Component({
  selector: 'app-proveedoresmain',
  templateUrl: './proveedoresmain.component.html',
  styleUrls: ['./proveedoresmain.component.css']
})
export class ProveedoresmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proveedores: Empresa[] = [
    {
      nombre: 'Gloria',
      productos: 15,
      tipo: 'Principal'
    },
    {
      nombre: 'Alicorp',
      productos: 25,
      tipo: 'Principal'
    }
  ]

    agregarNuevoProveedor(nuevo: Empresa):void {
    this.proveedores.push(nuevo);
  }

  // controlInput(evento: any): void{
  //   console.log(evento);
  //   this.nuevoProveedor.nombre = evento.target.value;
  //   console.log(this.nuevoProveedor);
  // }

}
