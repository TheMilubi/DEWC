import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private _http: HttpClient) { }
  getGatosJSON(): Observable<any> { // Devuelve todos los gatos
    return this._http.get(`http://localhost:3000/gatos`);
  }
  getGatoJSON(id: number): Observable<any> { // Devuelve un solo gato
    return this._http.get(`http://localhost:3000/gatos/${id}`);
  }
  getGatosPorRazaJSON(raza: string): Observable<any> { // Devuelve los gatos de una raza concreta
    return this._http.get(`http://localhost:3000/gatos?raza=${raza}`);
  }
}

