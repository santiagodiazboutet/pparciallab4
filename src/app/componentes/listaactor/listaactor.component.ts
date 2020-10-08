import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/interface/actor';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-listaactor',
  templateUrl: './listaactor.component.html',
  styleUrls: ['./listaactor.component.css']
})
export class ListaactorComponent implements OnInit {
  @Input() lista:Array<Actor>;
  @Input() TipoLista:boolean;
  @Output() mandaPais:EventEmitter<any>;

  constructor(private httpservice:MiHttpService) {

      this.mandaPais=new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  regionSeleccionada(hola:String){
    console.log(hola)
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/region/"+hola).subscribe((paises: any) => {
      console.log(hola);
      this.lista=paises;
    }, error => {
      console.log('Error');
    });
  }
  ActorSeleccionado(pais){

    this.mandaPais.emit(pais);
  }

}
