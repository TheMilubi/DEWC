import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.sass']
})
export class GatoComponent implements OnInit {
  gato: Gato;
  gatoForm: FormGroup;
  visible: boolean;
  arrayGatos: Gato[];
  constructor() {
  }
  ngOnInit() {
    //alert("Soy el componente gato");
    this.gato = new Gato('', '');
    this.visible = true;
    // Array de gatos
    this.arrayGatos = [
      new Gato('Benito', 'Siamés', 16),
      new Gato('Tina', 'Persa'),
      new Gato('Sira', 'Común', 1)
    ];
    this.gatoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      raza: new FormControl(''),
      edad: new FormControl(-1, [Validators.max(25), Validators.min(-1)])
    })
  }
  cambiaVisibilidad() {
    this.visible = !this.visible;
  }
  addGato() {
    if (/\S+/.test(this.gato.nombre)) { // Impido que esté vacío el nombre
      this.arrayGatos.push(this.gato);
      this.gato = new Gato('', '');
    }
  }
  delGato(i: number) {
    this.arrayGatos.splice(i, 1);
  }
  formSubmit() {
    this.gato = this.gatoForm.value;
    this.addGato();
    this.gatoForm.reset()
  }
  get nombre() { return this.gatoForm.get('nombre'); }
  get edad() { return this.gatoForm.get('edad') }

}
