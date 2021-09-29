import {Component} from '@angular/core';

@Component({
    selector: 'app-agregador',
    templateUrl: './agregador.component.html',
    styleUrls: ['./agregador.component.css']
  })
export class AgregadorComponent {
  titulo: string = "PRIMER COMPONENTE";
  valor: number = 0;
  salto: number = 6;

  agregar(numero: number): void{
    this.valor += numero;
  }

}