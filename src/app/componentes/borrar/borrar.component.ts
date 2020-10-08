import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/interface/actor';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
  @Input() pais:Actor;
  @Output() mostrar:EventEmitter<any>;
  @Input() lista:Array<Actor>;
  constructor() {
    this.mostrar=new EventEmitter<any>();
   }


  ngOnInit(): void {
  }
  accion(){
    console.log(this.pais);
    console.log(this.lista);

    this.mostrar.emit(true);
    console.log(this.lista.findIndex(val=>val.id===this.pais.id));
    if(this.lista.findIndex(val=>val.id===this.pais.id)>-1){
    this.lista.splice(this.lista.findIndex(val=>val.id===this.pais.id),1);
    this.pais=null;}
  }
}
