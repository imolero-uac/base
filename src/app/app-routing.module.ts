import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaclientesComponent } from './clientes/listaclientes/listaclientes.component';
import { ProveedoresmainComponent } from './proveedores/proveedoresmain/proveedoresmain.component';
import { InicioComponent } from './webpage/inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'clientes',
        component: ListaclientesComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'proveedores',
        component: ProveedoresmainComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ""
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ] 
})
export class AppRoutingModule {

}