import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Actor } from '../interface/actor';
@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  listaActores:Array<Actor>;
  constructor( public http: HttpClient ) {
    console.log(this.listaActores)

    if(this.listaActores===undefined){
    this.http.get("https://run.mocky.io/v3/8cd5ec72-bbf7-4964-9332-52ab82774725").subscribe((paises: any) => {
      this.listaActores=paises;

      console.log("entro");
      console.log(this.listaActores);
    }, error => {
      console.log('Error');
    });
   }
   }
  public obtenerPaises(url) {
    return this.http.get(url);
  }
  public getActores(){
    console.log(this.listaActores);

    return this.listaActores;
  }

  public inicial(){

  }
}
