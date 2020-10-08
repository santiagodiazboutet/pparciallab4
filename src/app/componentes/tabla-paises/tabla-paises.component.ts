import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiHttpService } from "../../servicios/mi-http.service";
@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises:Array<any>;
  @Input() TipoLista:boolean;
  @Output() mandaPais:EventEmitter<any>;
  @Output() mandaLista:EventEmitter<any>;
  constructor(private httpservice:MiHttpService) {
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/region/africa").subscribe((paises: any) => {
      this.listaPaises=paises;
    }, error => {
      console.log('Error');
    });
      this.mandaPais=new EventEmitter<any>();
      this.mandaLista=new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  regionSeleccionada(hola:String){
    console.log(hola)
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/region/"+hola).subscribe((paises: any) => {
      console.log(hola);
      this.listaPaises=paises;
    }, error => {
      console.log('Error');
    });
  }
  seleccionaPais(pais){

    this.mandaPais.emit(pais);
  }
}
