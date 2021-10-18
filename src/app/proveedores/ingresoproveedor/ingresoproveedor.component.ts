import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-ingresoproveedor',
  templateUrl: './ingresoproveedor.component.html',
  styleUrls: ['./ingresoproveedor.component.css']
})
export class IngresoproveedorComponent implements OnInit {

  constructor(
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit(): void {
  }

  nuevoProveedor: Empresa = {
    nombre: '',
    productos: 0,
    tipo: ''
  }

  // @Output() 
  // onNuevoProveedor: EventEmitter<Empresa> = new EventEmitter();

  agregar(): void {
    if (this.nuevoProveedor.nombre.trim().length == 0) {
      console.log('no paso validacion');
      return;
    }
    // this.onNuevoProveedor.emit(this.nuevoProveedor);
    this.proveedoresService.agregar(this.nuevoProveedor);
    // console.log(this.nuevoProveedor);
    this.nuevoProveedor = {
      nombre: '',
      productos: 0,
      tipo: ''
    }

  }

}
