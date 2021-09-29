import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Validators } from '@angular/forms';
//import { Curso, DetalleMatricula } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}

// console.log(AppComponent);

// console.log('Bienvenidos a Typescript');


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

//#region funciones (basico)
// function sumar(a: number, b: number): number {
//   return a + b;
// }

// function mostrar(valor: any): void {
//   console.log(valor);
// }

// let resultado = sumar(5, 6);

// console.log(resultado);

// mostrar(resultado);

// const sumarF = (a: number, b: number): number => a + b;

// const mostrarF = (valor: any): void => {
//   console.log(valor);
// }

// mostrar(sumarF(7, 8));
// mostrarF(sumarF(7, 8));

// function restar(nro01: number, nro02: number = 2, nroAux?: number): number {
//   return nro01 - nro02;
// }

// resultado = restar(15, 5, 25);
// mostrar(resultado);
//#endregion

//#region metodos y objetos
// interface Cliente {
//   nombre: string,
//   apellido: string,
//   cuenta: Cuenta,
//   movimiento: (valor: number) => void
// }

// interface Cuenta {
//   agencia: string,
//   saldo: number
// }

// const ag01cl01: Cliente = {
//   nombre: 'Juan',
//   apellido: 'Perez',
//   cuenta: {
//     agencia: '01',
//     saldo: 1500
//   },
//   movimiento(valor: number) {
//     this.cuenta.saldo += valor;
//   }
//   // movimiento : (valor: number): void => this.cuenta.saldo += valor;
// }

// // function deposito(cantidad: number, cuenta: Cuenta): void {
// //   cuenta.saldo += cantidad;
// // }

// // deposito(500, ag01cl01.cuenta);

// ag01cl01.movimiento(1500);

// console.table(ag01cl01);
//#endregion

//#region desestructuracion de objetos
// interface Cuenta {
//   cliente: string, 
//   saldo: number,
//   movimiento: Movimiento
// }

// interface Movimiento {
//   saldoAnterior: number, 
//   valorMovimiento: number
// }

// const cuenta: Cuenta = {
//   cliente: 'Juan Perez',
//   saldo: 500,
//   movimiento: {
//     saldoAnterior: 0, 
//     valorMovimiento: 500
//   }
// }

// console.log('El cliente de la cuenta es: ', cuenta.cliente);
// console.log('El saldo de la cuenta es: ', cuenta.saldo);
// console.log('El saldo Anterior de la cuenta es: ', cuenta.movimiento.saldoAnterior);
// console.log('El valor del Movimiento de la cuenta es: ', cuenta.movimiento.valorMovimiento);

// console.log('Desestructurando un objeto: ');

// let {cliente, saldo, movimiento: {saldoAnterior, valorMovimiento}} = cuenta;
// // let {saldoAnterior, valorMovimiento} = movimiento;

// console.log('El cliente de la cuenta es: ', cliente);
// console.log('El saldo de la cuenta es: ', saldo);
// console.log('El saldo Anterior de la cuenta es: ', saldoAnterior);
// console.log('El valor del Movimiento de la cuenta es: ', valorMovimiento);
//#endregion

//#region desestructuracion de arreglos
// const pasatiempos: string[] = ['Ludo', 'Monopolio', 'Risk'];

// console.log('Pasatiempo 01: ', pasatiempos[0]);
// console.log('Pasatiempo 02: ', pasatiempos[1]);
// console.log('Pasatiempo 03: ', pasatiempos[2]);

// console.log('desestructurando un arreglo');

// const [p01, , p03] = pasatiempos;

// console.log('Pasatiempo 01: ', p01);
// console.log('Pasatiempo 02: ', 'sin valor');
// console.log('Pasatiempo 03: ', p03);
//#endregion

//#region desestructuracion de parametros
// interface DetalleMatricula {
//   nombreCurso: string,
//   creditos: number
// }

// const mat_mate: DetalleMatricula = {
//   nombreCurso: 'Matematica I',
//   creditos: 3
// }

// const mat_ads: DetalleMatricula = {
//   nombreCurso: 'Análisis y Diseño de Sistemas', 
//   creditos: 4
// }

// function totalCreditos(detalles: DetalleMatricula[]): number[]{
//   let totalCreditos = 0;
//   let totalCursos = 0;
//   // detalles.forEach((detalleMatricula) => {
//   //   totalCreditos += detalleMatricula.creditos;
//   // });

//   detalles.forEach(({creditos}) => {
//     totalCreditos += creditos;
//     totalCursos ++;
//   });
//   return [totalCreditos, totalCursos];
// }

// const detMat: DetalleMatricula[] = [mat_mate, mat_ads];

// const [creditosMatriculados, cursosMatriculados] = totalCreditos(detMat);

// console.log('Total de creditos matriculados: ', creditosMatriculados);
// console.log('Total cursos matriculados: ', cursosMatriculados);
//#endregion

//#region import export

// const mat_mate: DetalleMatricula = {
//   nombreCurso: 'Matematica I',
//   creditos: 3
// }

// const mat_ads: DetalleMatricula = {
//   nombreCurso: 'Análisis y Diseño de Sistemas', 
//   creditos: 4
// }

// function totalCreditos(detalles: DetalleMatricula[]): number[]{
//   let totalCreditos = 0;
//   let totalCursos = 0;
//   // detalles.forEach((detalleMatricula) => {
//   //   totalCreditos += detalleMatricula.creditos;
//   // });

//   detalles.forEach(({creditos}) => {
//     totalCreditos += creditos;
//     totalCursos ++;
//   });
//   return [totalCreditos, totalCursos];
// }

// const detMat: DetalleMatricula[] = [mat_mate, mat_ads];

// const [creditosMatriculados, cursosMatriculados] = totalCreditos(detMat);

// console.log('Total de creditos matriculados: ', creditosMatriculados);
// console.log('Total cursos matriculados: ', cursosMatriculados);

// const curso: Curso = {
//   docente: 'Juan Perez', 
//   nombre: 'Matemática I', 
//   creditos: 3
// }

//#endregion

//#region clases
// class Alumno {
//   // private nombre: string;
//   // private dni: string;
//   static carreraProfesional: string;

//   // constructor(nombre: string, dni: string){
//   //   this.nombre = nombre;
//   //   this.dni = dni;
//   // }
  
//   constructor(
//     private nombre: string, 
//     private dni?: string
//     ){}

//   public mostrarAlumno(){
//     console.log('Carrera Profesional: ', Alumno.carreraProfesional);
//     console.log('Nombre: ', this.nombre);
//     console.log('DNI: ', this.dni);
//     // console.log(alumno);
//     // console.table(alumno);
//   }

// }


// Alumno.carreraProfesional = 'IS';
// const e01cp01: Alumno = new Alumno('Juan Perez');

// // function mostrarAlumno(alumno: Alumno){
// //   const {nombre, dni} = alumno;
// //   console.log('Carrera Profesional: ', Alumno.carreraProfesional);
// //   console.log('Nombre: ', nombre);
// //   console.log('DNI: ', dni);
// //   // console.log(alumno);
// //   // console.table(alumno);
// // }

// // mostrarAlumno(e01cp01);
// console.log('--------------------------')
// console.log(e01cp01);
// e01cp01.mostrarAlumno();
//#endregion

//#region uso de static y this
// class Cafetera {
//   static serie: number = 0;

//   constructor(
//     private color: string,
//     private nroSerie?: number
//   ){
//     Cafetera.serie += 1;
//     this.nroSerie = Cafetera.serie;
//   }

//   getColor(): string {
//     return this.color;
//   }

//   getNroSerie(): number | undefined {
//     return this.nroSerie;
//   }

//   mostrar(){
//     mostrarCafetera(this);
//   }

// }

// const mostrarCafetera = (cafetera: Cafetera) => {
//   console.log('---------------------');
//   console.log('Serie: ', cafetera.getNroSerie());
//   console.log('Color: ', cafetera.getColor());
//   console.log('---------------------');
// };

// const cafeteras: Cafetera[] = [new Cafetera('rojo'), new Cafetera('azul')];
// cafeteras.push(new Cafetera('verde'));
// cafeteras.push(new Cafetera('morado'));

// cafeteras.forEach((cafetera) => {cafetera.mostrar()});
// console.log('estado de la variable estatica: ', Cafetera.serie);
//#endregion

//#region herencia y polimorfismo
// class Persona {
//   constructor(
//     protected nombre: string,
//     protected dni: string
//   ){};

//   getNombre(): string {
//     return this.nombre;
//   }

//   getDni(): string {
//     return this.dni;
//   }
// }

// class Alumno extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codigo: string,
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log('-------------------------');
//     console.log('Nombre: ', this.nombre);
//     console.log('DNI: ', this.dni);
//     console.log('Codigo: ', this.codigo);
//     console.log('-------------------------');
//   };
// }

// class Docente extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codigoDocente: string,
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log('-------------------------');
//     console.log('Nombre: ', this.nombre);
//     console.log('DNI: ', this.dni);
//     console.log('Codigo Docente: ', this.codigoDocente);
//     console.log('-------------------------');
//   };
// }

// const mostrarPersona = (persona: Persona) => {
//   console.log('-------------------------');
//   console.log('Nombre: ', persona.getNombre());
//   console.log('DNI: ', persona.getDni());
//   console.log('-------------------------');
// };

// const alumnos: Alumno[] = [
//   new Alumno('Juan Perez', '00000000', '2021001a'),
//   new Alumno('Juana Garcia', '00000001', '2021002b'),
//   new Alumno('Juan Alvarado', '00000002', '2021003c'),
//   new Alumno('Moises Escalante', '00000003', '2021004d'),
// ];

// const docentes: Docente[] = [
//   new Docente('Docente Juan Perez', '00000000', '2021001a'),
//   new Docente('Docente Juana Garcia', '00000001', '2021002b'),
//   new Docente('Docente Juan Alvarado', '00000002', '2021003c'),
//   new Docente('Docente Moises Escalante', '00000003', '2021004d'),
// ];


// alumnos.forEach((alumno) => alumno.mostrar());

// alumnos.forEach((alumno) => mostrarPersona(alumno));
// docentes.forEach((docente) => mostrarPersona(docente));
//#endregion

//#region generics
// function queSoy<T>(valor: T) {
//   return valor;
// }

// let soyString = queSoy('Hola desde typescript');
// let soyNumero = queSoy(5);
// let soyArreglo = queSoy([1,2,3,4,5]);
//#endregion

//#region decoradores
// function classDecorator<T extends {new (...args: any[]): {}}>(
//   constructor: T
// ) {
//   return class extends constructor {
//     nuevaPropiedad = "nuevo atributo";
//     hola = 'hola';
//   }
// }


// @classDecorator
// class Clase{
//   public atributo: string = '123456';

//   mostrar() {
//     console.log('hola desde Clase');
//   }
// }

// console.log(Clase);

// const clase = new Clase();
// clase.mostrar();

// console.log(clase);
//#endregion

//#region encadenamiento opcional
// interface Padre {
//   nombre: string,
//   hijos?: string[]
// }

// const padre01 = {
//   nombre: 'Pedro'
// }

// const padre02 = {
//   nombre: 'Alfredo', 
//   hijos: ['Ana', 'Lucia']
// }

// function mostrarHijos(padre: Padre): void {
//   const cantidadHijos = padre.hijos?.length;

//   console.log(cantidadHijos);
// }

// mostrarHijos(padre01);
// mostrarHijos(padre02);
//#endregion
