import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Input() pais:any;
  @Input() mostrar:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  accion(){
    this.pais=null;
  }

}
