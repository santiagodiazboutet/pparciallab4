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
    this.httpservice.obtenerPaises("https://run.mocky.io/v3/8cd5ec72-bbf7-4964-9332-52ab82774725").subscribe((paises: any) => {
      this.listaActores=paises;
    }, error => {
      console.log('Error');
    });
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
