import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ClienteComponent } from './cliente/cliente.component';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';

@NgModule({
    declarations: [
        ClienteComponent,
        ListaclientesComponent
    ], 
    exports: [
        ListaclientesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClientesModule {

}