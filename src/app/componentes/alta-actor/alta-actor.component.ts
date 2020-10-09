import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';
import { Actor } from "../../interface/actor";
@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  actor:Actor;
  constructor(private servicio:MiHttpService) {
    this.actor={Nombre:"",apellido:"",fecha_nacimiento:"",foto:"",id:0,nacionalidad:"",sexo:""};

  }

  ngOnInit(): void {
  }



  SeleccionoPais(pais){
    this.actor.nacionalidad=pais.name;

  }

  altaActor(){
    console.log(this.actor);
    this.actor.id=this.servicio.listaActores.length+1;
    this.servicio.listaActores.push(this.actor);
  }
}
