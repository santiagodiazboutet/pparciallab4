import { Component, OnInit } from '@angular/core';
import { Actor } from "../../interface/actor";
@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  actor:Actor;
  constructor() {
    this.actor={Nombre:"",apellido:"",bandera:"",fecha_nacimiento:"",foto:"",id:0,pais:"",sexo:""};

  }

  ngOnInit(): void {
  }



  SeleccionoPais(pais){
    this.actor.pais=pais.name;
    this.actor.bandera=pais.flag;
  }

  altaActor(){
    console.log(this.actor);
  }
}
