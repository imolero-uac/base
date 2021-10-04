import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedoresmain',
  templateUrl: './proveedoresmain.component.html',
  styleUrls: ['./proveedoresmain.component.css']
})
export class ProveedoresmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregar():void {
    console.log("desde agregar");
  }

}
