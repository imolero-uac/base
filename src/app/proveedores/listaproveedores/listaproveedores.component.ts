import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresa.interface';

@Component({
  selector: 'app-listaproveedores',
  templateUrl: './listaproveedores.component.html',
  styleUrls: ['./listaproveedores.component.css']
})
export class ListaproveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  proveedores: Empresa[] = []
}
