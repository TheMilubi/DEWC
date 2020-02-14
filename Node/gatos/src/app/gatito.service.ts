import { Injectable } from '@angular/core';
import { gatos } from "src/assets/gatos";
import { Observable, of } from 'rxjs';
import { Gatito } from './gatito';


@Injectable({
  providedIn: 'root'
})
export class GatitoService {
  gatos = gatos; // Array de gatos
  /* getGatos() { // Método que devuelve el array de gatos
    return this.gatos;
  } */
  getGatos(): Observable<Gatito[]> { // Observable para poder suscribirse
    return of(this.gatos);
  }
  
  /* public get getGatos() : Gatito[] {
    return this.gatos
  } */
  

  constructor() { }
}