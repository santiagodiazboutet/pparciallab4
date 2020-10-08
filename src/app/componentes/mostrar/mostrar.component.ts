import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  @Input() pais:any;
  @Input() mostrar:boolean;
  constructor() {

  }

  ngOnInit(): void {
  }
  accion(){
    this.pais=null;
  }
}
