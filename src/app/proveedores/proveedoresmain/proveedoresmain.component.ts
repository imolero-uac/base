import { Component, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-proveedoresmain',
  templateUrl: './proveedoresmain.component.html',
  styleUrls: ['./proveedoresmain.component.css']
})
export class ProveedoresmainComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

  // agregarNuevoProveedor(nuevo: Empresa):void {
  //   this.proveedoresService.agregar(nuevo);
  // }

  // controlInput(evento: any): void{
  //   console.log(evento);
  //   this.nuevoProveedor.nombre = evento.target.value;
  //   console.log(this.nuevoProveedor);
  // }

}
