import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor( public http: HttpClient ) { }
  public obtenerPaises(url) {
    return this.http.get(url);
  }
}
