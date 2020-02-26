import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[]
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.getAlumnos()
  }
  getAlumnos() {
    this.alumnoService.readAlumnos().subscribe(
      data => this.alumnos
    )
  }
  /* delete(){
    this.alumnoService.deleteAlumno()
  } */
}
