import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interface/actor';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  listaActores:Array<Actor>;
  actor:Actor;
  mostrarBotones:boolean;

  constructor(private httpservice:MiHttpService) {
    setTimeout(()=>this.listaActores=this.httpservice.getActores(),500)

    console.log(this.listaActores);
    this.mostrarBotones=false;
   }

  ngOnInit(): void {
  }

  ActorSeleccionado(actor){
    this.mostrarBotones=true;
    this.actor=actor;
  }
  mostrar(cosa){
    this.mostrarBotones=false;
  }
}
