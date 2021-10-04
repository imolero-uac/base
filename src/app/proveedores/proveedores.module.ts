import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedoresmainComponent } from './proveedoresmain/proveedoresmain.component';



@NgModule({
  declarations: [
    ProveedorComponent,
    ProveedoresmainComponent
  ],
  exports: [
    ProveedoresmainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProveedoresModule { }
