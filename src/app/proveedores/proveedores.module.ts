import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedoresmainComponent } from './proveedoresmain/proveedoresmain.component';
import { ListaproveedoresComponent } from './listaproveedores/listaproveedores.component';
import { IngresoproveedorComponent } from './ingresoproveedor/ingresoproveedor.component';
import { ProveedoresService } from './services/proveedores.service';

@NgModule({
  declarations: [
    ProveedorComponent,
    ProveedoresmainComponent,
    ListaproveedoresComponent,
    IngresoproveedorComponent
  ],
  exports: [
    ProveedoresmainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProveedoresService
  ]
})
export class ProveedoresModule { }
