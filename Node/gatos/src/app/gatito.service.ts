import { Injectable } from '@angular/core';
import { gatos } from "src/assets/gatos";
import { Observable, of } from 'rxjs';
import { Gatito } from './gatito';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from './mensaje.service';


@Injectable({
  providedIn: 'root'
})
export class GatitoService {
  gatos; // Array de gatos
  /* getGatos() { // Método que devuelve el array de gatos
    return this.gatos;
  } */
  getGatos(): Observable<Gatito[]> { // Observable para poder suscribirse
    return of(this.gatos);
  }

  /* public get getGatos() : Gatito[] {
    return this.gatos
  } */


  constructor(private _http: HttpClient, private mensajeService: MensajeService) { }

  getGatosJSONSERVER(): Observable<any> {
    this.mensajeService.add('Desde http: gatos obtenidos')
    return this._http.get(`http://localhost:3000/gatos`);
  }

}