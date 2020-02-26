import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Alumno } from './alumno';
import { Parametro } from './paramatros';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  parametrosHttp : Parametro;

  constructor(private _http: HttpClient) { 
      this.parametrosHttp = new Parametro();
  }

  readAlumnos():Observable<any>{
    return this._http.get(`http://localhost:3000/alumnos`);
  }

  deleteAlumno(alumno:Alumno): Observable<any> {
   return this._http.delete(`http://localhost:3000/alumno/${alumno.id}`);
  }

  createAlumno(alumno:Alumno): Observable<any>{
    this.parametrosHttp.alumno_id = alumno.id;
    this.parametrosHttp.alumno = alumno;
    return this._http.post(`http://localhost:3000/alumno`,this.parametrosHttp,httpOptions);
  }

  upddateAlumno(alumno:Alumno): Observable<any>{
    this.parametrosHttp.alumno_id = alumno.id;
    this.parametrosHttp.alumno = alumno;
    return this._http.put(`http://localhost:3000/alumno`,this.parametrosHttp,httpOptions);
 }

 ordenaAlfabetico(alumnos:Alumno[]){
   return alumnos.sort((a,b) => {
    if ((a.apellidos+a.nombre).toUpperCase() > (b.apellidos+b.nombre).toUpperCase()) return 1;
    if ((a.apellidos+a.nombre).toUpperCase() < (b.apellidos+b.nombre).toUpperCase()) return -1;
    return 0;
   });
 }
}

