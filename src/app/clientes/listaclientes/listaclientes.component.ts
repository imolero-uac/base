import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {

  clientes: string[] = [
    "Juan Perez", 
    "Ana Gomez", 
    "Fernando Romero", 
    "Cecilia Morales", 
    "Augusto Valencia", 
    "Ruth Calle"
  ];
  clienteEliminado: string = "sin eliminar";

  constructor() { 
  }

  ngOnInit(): void {
  }

  eliminarElemento(): void {
    this.clienteEliminado = this.clientes.shift() || "sin valor";

  }

}

