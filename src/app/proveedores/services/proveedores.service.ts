import { Injectable } from "@angular/core";
import { Empresa } from "../interfaces/empresa.interface";

@Injectable()
export class ProveedoresService {

    _proveedores: Empresa[] = [
        {
          nombre: 'Gloria',
          productos: 15,
          tipo: 'Principal'
        },
        {
          nombre: 'Alicorp',
          productos: 25,
          tipo: 'Principal'
        }
      ]

    get proveedores(): Empresa[]{
      return this._proveedores;
    }
    
    agregar(nuevaEmpresa: Empresa): void {
        this.proveedores.push(nuevaEmpresa);
    }
}