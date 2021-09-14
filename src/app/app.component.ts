import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}

console.log('Bienvenidos a Typescript');


//#region variables
// let nombre: string = 'Arturo';
// let ahorros: number | string = 500;
// let esAlto: boolean | string = true;
// esAlto = false;
// esAlto = "sin información";
// ahorros  = 1000;
// ahorros = 'sin ahorros';
// console.log(nombre, ahorros, esAlto);
//#endregion


//#region arreglos interfaces objetos
// let pasatiempos: (string | number)[] = ['caminar', 'violin'];

// pasatiempos.push('ajedrez');
// pasatiempos.push(5);
// console.log(pasatiempos);

// const edad: number[] = [5, 6, 5];
// //edad = [6,6,6,6];
// edad.push(10);
// edad.pop();
// edad.pop();
// console.log(edad);

// interface Estudiante {
//   nombre: string,
//   apPaterno: string,
//   codigo: string,
//   pension: number,
//   estaMatriculado: boolean,
//   pasatiempos: string[],
//   escuela?: string
// }

// let alumno: Estudiante = {
// nombre: 'Juan',
// apPaterno: 'Garcia',
// codigo: '000951554j',
// pension: 850,
// estaMatriculado: true,
// pasatiempos: ['futbol', 'basket']
// };

// alumno.escuela = 'Ingeniería de Sistemas';

// console.log(alumno);
// console.table(alumno);
//#endregion





