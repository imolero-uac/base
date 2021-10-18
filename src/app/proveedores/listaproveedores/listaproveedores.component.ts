import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-listaproveedores',
  templateUrl: './listaproveedores.component.html',
  styleUrls: ['./listaproveedores.component.css']
})
export class ListaproveedoresComponent implements OnInit {

  constructor(
    private proveedoresService: ProveedoresService
  ) {
  }

  ngOnInit(): void {
  }

  proveedores: Empresa[] = this.proveedoresService.proveedores;
  
}
